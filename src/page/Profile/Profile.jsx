import React, { Fragment } from 'react';
import './Profile.css';
import { useState, useEffect } from 'react'
import { create } from 'kubo-rpc-client'

const client = create({ url: "http://127.0.0.1:5002/api/v0" })

export default function Profile({ contract }) {
  // STATE VARIABLES
  const [profile, setProfile] = useState('')
  const [nfts, setNfts] = useState('')
  const [avatar, setAvatar] = useState(null)
  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(true)

  // GET USER NFTS OBJECTS
  const loadMyNFTs = async () => {
    const results = await contract.getMyNfts();
    let nfts = await Promise.all(results.map(async i => {
      const uri = await contract.tokenURI(i)
      const response = await fetch(uri)
      const metadata = await response.json()
      return ({
        id: i,
        username: metadata.username,
        avatar: metadata.avatar
      })
    }))
    setNfts(nfts)
    getProfile(nfts)
  }

  // GET NFT FROM CONTRACT
  const getProfile = async (nfts) => {
    const address = await contract.signer.getAddress()
    const id = await contract.profiles(address)
    const profile = nfts.find((i) => i.id.toString() === id.toString())
    setProfile(profile)
    setLoading(false)
  }

  // UPLOAD TO IPFS PEER NETWORKS
  const uploadToIPFS = async (event) => {
    event.preventDefault()
    const file = event.target.files[0]
    if (typeof file !== 'undefined') {
      try {
        const result = await client.add(file)
        setAvatar(`https://ipfs.io/ipfs/${result.path}`)
      } catch (error) {
        console.log("ipfs image upload error: ", error)
      }
    }
  }

  // CREATE A PROFILE TO IPFS
  const mintProfile = async (event) => {
    if (!avatar || !username) {
      alert("Please fill all fields!");
      return
    }
    try {
      const result = await client.add(JSON.stringify({ avatar, username }))
      setLoading(true)
      await (await contract.mint(`https://ipfs.io/ipfs/${result.path}`)).wait()
      loadMyNFTs()
      setUsername('')
      setAvatar(null);
    } catch (error) {
      window.alert("ipfs uri upload error: ", error)
    }
  }

  const switchProfile = async (nft) => {
    setLoading(true)
    await (await contract.setProfile(nft.id)).wait()
    getProfile(nfts)
  }

  useEffect(() => {
    if (!nfts) {
      loadMyNFTs()
      // FOR DEBUG
      //console.log(typeof (nfts))
    }
  })
  // FOR DEBUG
  // console.log(loading)
  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className='flex flex-col w-full md:w-full px-10'>
          {profile ? (
            null
          ) : (
            <h4 className='mt-5 text-2xl font-bold'>No NFT, Create one to upload post!</h4>
          )}
          <div className="flex mt-12 gap-10">
            {profile ? (
              <div className='flex flex-col gap-1'>
                <h2 className='text-center'>Current Profile: <b>{profile.username}</b></h2>
                <img className='w-[20rem] rounded-lg' src={profile.avatar} alt="image" />
              </div>
            ) : (
              null
            )}
            <div className='flex flex-col gap-5 w-full md:w-1/2'>
              <input className="block w-full text-sm bg-transparent text-gray-900 border border-gray-900 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" onChange={uploadToIPFS} />

              <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} />
              <button onClick={mintProfile} className='w-full md:w-[175px] h-[42px] bg-green-300 rounded-lg border border-black md:top-[200px]  md:left-[548px] overflow-hidden z-[14]'>
                <span className="font-semibold text-base text-black">Mint This Profile</span>
              </button>
            </div>
          </div>
          <div className='mt-3 font-semibold text-xl text-black  md:top-[300px] md:left-[290px]'>Recent Profile</div>
          <div className='flex flex-col md:flex-row gap-5 w-full flex-wrap items-center'>
            {nfts === null ? (
              null
            ) :
              (
                <>
                  {nfts?.map((nft, index) => {
                    if (nft.id === profile.id) return;
                    return (
                      <Fragment key={index}>
                        <div className='mt-5 w-[293px] bg-transparent rounded-lg border border-black md:top-[340px] md:left-[290px] overflow-hidden'>
                          <div style={{ backgroundImage: `url(${nft.avatar})`, backgroundSize: "cover" }} className='w-[293px] h-[220px] relative' />
                          <h2 className='text-center text-2xl'>{nft.username}</h2>
                          <button className='w-[222px] h-[42px] bg-green-300 rounded-lg border border-black relative overflow-hidden z-[26] mt-[29px] ml-[36px] mb-5'>
                            <span className="font-semibold text-base text-black inset-0 flex justify-center items-center" onClick={() => switchProfile(nft)}>Change Profile</span>
                          </button>
                        </div>
                      </Fragment>
                    )
                  })}
                </>
              )}
            {/*  */}
          </div>
        </div>
      )}

    </>
  );
}
