import React from 'react';
import Home from './page/Home/Home';
import { useState } from 'react'
import Profile from './page/Profile/Profile';
import { ethers } from "ethers"
import DecentratwitterAbi from './contractsData/decentratwitter.json'
import DecentratwitterAddress from './contractsData/decentratwitter-address.json'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//IMAGE
import HomeIcon from './assets/images/home.png';
import ProfileIcon from './assets/images/profile.png';
import LogoImage from './assets/images/96858bf39fb28499437875ab86a6d1dcd335a243.png';


export default function App() {
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState({});


  // METAMASK SETUP
  const web3Handler = async () => {
    let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(accounts[0])
    window.ethereum.on('chainChanged', () => {
      window.location.reload();
    })
    window.ethereum.on('accountsChanged', async () => {
      setLoading(true)
      web3Handler()
    })
    // METAMASK PROVIDER
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    // Get signer
    const signer = provider.getSigner()
    loadContract(signer);
  }

  const loadContract = async (signer) => {

    // DEPLOYED CONTRACT
    const contract = new ethers.Contract(DecentratwitterAddress.address, DecentratwitterAbi.abi, signer)
    setContract(contract)
    setLoading(false)
  }
  // FOR DEBUG
  // console.log(contract)
  
  return (
    <Router>
      <div className='flex bg-yellow-50'>
        <div className='w-64 md:h-lvh border-r border-black overflow-hidden'>
          <div className='m-4 '>
            <span className='flex items-center overflow-hidden'>
              <div className='w-48 h-8 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${LogoImage})` }}></div>
            </span>
            <div className='mt-6'>
              <Link to="/">
                <span className='flex items-center font-semibold text-gray-900 text-xl'>
                  <div className='w-4 h-4 bg-cover bg-center bg-no-repeat mr-2' style={{ backgroundImage: `url(${HomeIcon})` }} />
                  Home
                </span>
              </Link>
              <Link to="/profile">
                <span className='flex items-center text-base font-semibold text-gray-900 mt-4  text-xl'>
                  <div className='w-4 h-4 bg-cover bg-center bg-no-repeat mr-2' style={{ backgroundImage: `url(${ProfileIcon})` }} />
                  Profile
                </span>
              </Link>
            </div>
            <button className='w-full h-10 mt-6 bg-orange-700 font-medium text-white border border-black rounded-lg overflow-hidden '>{account ? account.slice(0, 5) + '...' + account.slice(38, 42) : "Account"}</button>
            <button onClick={web3Handler} className='w-full h-10 mt-2 bg-green-300 font-medium border border-black rounded-lg overflow-hidden hover:opacity-80'>{account ? "Connected" : "Connect"}</button>
          </div>
        </div>
        {loading ? (
          <h1>Loading..</h1>
        )
          : (
            <Switch>
              <Route exact path="/">
                <Home contract={contract} />
              </Route>
              <Route path="/profile">
                <Profile contract={contract} />
              </Route>
            </Switch>
          )}
      </div>
    </Router>
  );
}
