import { useState, useEffect } from 'react';
import './Home.css';
import { ethers } from "ethers"
import { create } from 'kubo-rpc-client'


const client = create('http://127.0.0.1:5002/api/v0');

export default function Home({ contract }) {
  const [posts, setPosts] = useState('');
  const [profile, setProfile] = useState(false);
  const [post, setPost] = useState('');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(true);

  // LOAD ALL POST
  const loadPosts = async () => {
    let address = await contract.signer.getAddress()
    setAddress(address)

    const balance = await contract.balanceOf(address)
    setProfile(() => balance > 0)

    let results = await contract.getAllPosts()

    let posts = await Promise.all(results.map(async i => {
      let response = await fetch(`https://ipfs.io/ipfs/${i.hash}`)
      const metadataPost = await response.json()
      const nftId = await contract.profiles(i.author)
      const uri = await contract.tokenURI(nftId)
      response = await fetch(uri)
      const metadataProfile = await response.json()
      const author = {
        address: i.author,
        username: metadataProfile.username,
        avatar: metadataProfile.avatar
      }
      let post = {
        id: i.id,
        content: metadataPost.post,
        tipAmount: i.tipAmount,
        author
      }
      return post
    }))
    posts = posts.sort((a, b) => b.tipAmount - a.tipAmount)
    setPosts(posts)
    setLoading(false)
  }

  const uploadPost = async () => {
    if (!post) {
      alert("Please enter something in field!");
      return;
    }
    let hash
    // Upload  to IPFS
    try {
      const result = await client.add(JSON.stringify({ post }))
      setLoading(true)
      hash = result.path
      setPost("");
    } catch (error) {
      window.alert("ipfs image upload error: ", error)
    }
    // Upload to blockchain
    await (await contract.uploadPost(hash)).wait()
    loadPosts()
  }

  const tip = async (post) => {
    // tip 0.1 ETHER
    await (await contract.tipPostOwner(post.id, { value: ethers.utils.parseEther("0.1") })).wait()
    loadPosts()
  }

  useEffect(() => {
    if (!posts) {
      loadPosts()
    }
    // DEBUG
    // console.log(address)
  })

  return (
    <>
      {loading ?
        <p>Loading</p>
        :
        <>
          {profile ? (
            <div className='flex flex-col w-full md:w-1/2 md:px-10 px-5'>
              <div className='w-full overflow-hidden mt-6'>
                <textarea type='text' className='w-full h-full rounded-lg p-4 font-bold text-sm text-gray-900 bg-transparent outline-none' placeholder="What's on your mind??" value={post} onChange={(e) => setPost(e.target.value)} />
              </div>
              <div className='flex justify-end place-items-center'>
                <button onClick={uploadPost} className='w-20 h-8 mt-2 bg-zinc-700 text-white font-bold text-xs rounded-md'>Post</button>
              </div>
              {posts.length > 0 ? (
                <>
                  {posts.map((post, index) => (
                    <div key={index} className='w-full bg-box border border-black rounded-lg overflow-hidden mt-4'>
                      <div className='ml-2 mt-2'>
                        <div className='flex items-center'>
                          <div className='w-12 h-12 bg-cover bg-center bg-no-repeat rounded-full' style={{ backgroundImage: `url(${post.author.avatar})` }}> </div>
                          <div className='ml-2'>
                            <span className='text-sm text-gray-900'>{post.author.address}</span><br />
                            <span className='font-bold text-xl text-gray-900'>{post.author.username}</span>
                          </div>
                        </div>
                        <div>
                          <p className='p-2 text-md text-gray-900 text-justify'>
                            {post.content}
                          </p>
                        </div>
                      </div>
                      <div className='flex justify-end'>
                        <div className="flex flex-col place-items-center">
                          <span className=' block p-2 text-sm font-bold text-gray-900'>{ethers.utils.formatEther(post.tipAmount)} ETH</span>
                          {address === post.author.address || !profile ? null :
                            <button onClick={() => tip(post)} className='w-20 h-8 m-2 bg-gray-300 text-gray-900 font-semibold text-xs rounded-full border border-black'>Tip 0.1 ETH</button>
                          }

                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <h2 className='text-2xl font-bold'>No Post Yet!</h2>
              )}

            </div>
          ) : (
            <h2 className='mt-5 ml-5 font-bold text-2xl'>Create NFT Profile to upload post.</h2>

          )}
        </>
      }
    </>
  );
}
