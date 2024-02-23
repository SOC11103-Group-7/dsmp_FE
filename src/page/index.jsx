import React from 'react';
import './index.css';
import HomeIcon from '../assets/images/home.png';
import ProfileIcon from '../assets/images/profile.png';
import UserAvatar from '../assets/images/78919fd0-ee13-4419-80f3-1c857dd6aea4.png';
import LogoImage from '../assets/images/96858bf39fb28499437875ab86a6d1dcd335a243.png';

export default function Main() {
  return (
    <div className='flex bg-yellow-50'>
      <div className='w-64 h-lvh border-r border-black overflow-hidden'>
        <div className='m-4 '>
          <span className='flex items-center overflow-hidden'>
            <div className='w-48 h-8 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${LogoImage})` }}></div>
          </span>
          <div className='mt-6'>
            <span className='flex items-center text-base font-semibold text-gray-900 text-xl'>
              <div className='w-4 h-4 bg-cover bg-center bg-no-repeat mr-2' style={{ backgroundImage: `url(${HomeIcon})` }} />
              Home
            </span>
            <span className='flex items-center text-base font-semibold text-gray-900 mt-4  text-xl'>
              <div className='w-4 h-4 bg-cover bg-center bg-no-repeat mr-2' style={{ backgroundImage: `url(${ProfileIcon})` }} />
              Profile
            </span>
          </div>
          <button className='w-full h-10 mt-6 bg-orange-700 font-medium text-white border border-black rounded-lg overflow-hidden'>User Hash Here</button>
          <button className='w-full h-10 mt-2 bg-green-300 font-medium border border-black rounded-lg overflow-hidden'>Connect</button>
        </div>
      </div>
      <div className='flex flex-col w-full md:w-1/2 px-10'>
        <div className='w-full h-40 bg-box border border-black rounded-lg overflow-hidden mt-6 bg-box'>
          <input type='text' className='w-full h-full p-4 font-bold text-sm text-gray-900 bg-transparent outline-none' placeholder="What's on your mind??" />
        </div>
        <div className='flex justify-end'>
          <button className='w-20 h-8 mt-2 bg-zinc-700 text-white font-bold text-xs rounded-md'>Post</button>
        </div>
        <div className='w-full bg-box border border-black rounded-lg overflow-hidden mt-4 '>
          <div className='ml-2 mt-2'>
            <div className='flex items-center'>
              <div className='w-10 h-10 bg-cover bg-center bg-no-repeat rounded-full' style={{ backgroundImage: `url(${UserAvatar})` }}> </div>
              <div className='ml-2'>
                <span className='font-bold text-sm text-gray-900'>John Doe</span>
                <span className='text-xs text-red-600 ml-2'>25 minutes ago</span>
                
              </div>
              
            </div>
            <div className='ml-10'>
            <p className='p-2 text-sm text-gray-900 text-justify'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </div>
          </div>
          <div className='flex justify-end'>
           <div className="flex flex-col  place-items-center ">
               <span className=' block p-2 text-sm font-bold text-gray-900'>0.0ETH</span>
              <button className='w-20 h-8 m-2 bg-gray-300 text-gray-900 font-semibold text-xs rounded-full border border-black bg-yellow-50'>Tip 0.1ETH</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
