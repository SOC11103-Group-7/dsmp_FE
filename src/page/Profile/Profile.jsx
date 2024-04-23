import React from 'react';
import './Profile.css';
import HomeIcon from '../../assets/images/home.png';
import ProfileIcon from '../../assets/images/profile.png';
import LogoImage from '../../assets/images/96858bf39fb28499437875ab86a6d1dcd335a243.png';
import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div className='flex flex-col md:flex-row bg-yellow-50'>
      <div className='w-64 md:h-lvh border-r border-black overflow-hidden'>
        {/* Sidebar content */}
        <div className='h-full m-4'>
          <span className='flex items-center overflow-hidden'>
            <div className='w-48 h-8 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${LogoImage})` }}></div>
          </span>
          <div className='mt-6'>
            <Link to="/">
              <span className='flex items-center text-base font-semibold text-gray-900 text-xl'>
                <div className='w-4 h-4 bg-cover bg-center bg-no-repeat mr-2' style={{ backgroundImage: `url(${HomeIcon})` }} />
                Home
              </span>
            </Link>
            <Link to="/profile">
              <span className='flex items-center text-base font-semibold text-gray-900 mt-4 text-xl'>
                <div className='w-4 h-4 bg-cover bg-center bg-no-repeat mr-2' style={{ backgroundImage: `url(${ProfileIcon})` }} />
                Profile
              </span>
            </Link>
          </div>
          <button className='w-full h-10 mt-6 bg-orange-700 font-medium text-white border border-black rounded-lg overflow-hidden'>User Hash Here</button>
          <button className='w-full h-10 mt-2 bg-green-300 font-medium border border-black rounded-lg overflow-hidden'>Connect</button>
        </div>
      </div> {/*  content */}
      {/* Content */}
      <div className='flex flex-col w-full md:w-1/2 px-10'>
        {/* Profile Image Upload */}
        <div className='relative w-full md:w-[220px] h-[220px] bg-gray-300 md:absolute mt-6 md:left-[290px] z-[16]'>
          <input type="file" className='absolute inset-0 opacity-0 cursor-pointer' id="fileInput" />
          <label htmlFor="fileInput" className="absolute inset-0 cursor-pointer">
            <span className="font-semibold text-base text-black flex justify-center items-center h-full">Choose File</span>
          </label>
        </div>

        {/* Username Input */}
        <div className='w-full md:w-[599px] h-[58px] rounded-lg border border-black md:absolute mt-6 md:left-[547px] overflow-hidden z-[17]'>
          <input type="text" className='w-full h-full bg-box border-none pl-4 font-semibold text-base text-black outline-none' placeholder="Enter username" />
        </div>

        {/* Mint Profile Button */}
        <button className='w-full md:w-[175px] h-[42px] bg-green-300 rounded-lg border border-black md:absolute md:top-[200px]  md:left-[548px] overflow-hidden z-[14]'>
          <span className="font-semibold text-base text-black">Mint This Profile</span>
        </button>

        {/* Recent Profile */}
        <div className='mt-3 font-semibold text-xl text-black  md:absolute md:top-[300px] md:left-[290px]'>Recent Profile</div>

        {/* First Profile */}
        <div className=' mt-5 w-[293px] h-[310px] bg-transparent rounded-lg border border-black md:absolute md:top-[340px] md:left-[290px] overflow-hidden z-[24]'>
          <div className='w-[293px] h-[220px] bg-gray-300 relative z-[25]' />
          <button className='w-[222px] h-[42px] bg-green-300 rounded-lg border border-black relative overflow-hidden z-[26] mt-[29px] ml-[36px]'>
            <span className="font-semibold text-base text-black absolute inset-0 flex justify-center items-center">Change Profile</span>
          </button>
        </div>

        {/* Second Profile */}
        <div className=' mt-5 w-[293px] h-[310px] bg-transparent rounded-lg border border-black md:absolute md:top-[340px] md:left-[644px] overflow-hidden z-[28]'>
          <div className='w-[293px] h-[220px] bg-gray-300 relative z-[29]' />
          <button className='w-[222px] h-[42px] bg-green-300 rounded-lg border border-black relative overflow-hidden z-[30] mt-[29px] ml-[36px]'>
            <span className="font-semibold text-base text-black absolute inset-0 flex justify-center items-center">Change Profile</span>
          </button>
        </div>

        {/* Third Profile */}
        <div className=' mt-5 w-[293px] h-[310px] bg-transparent rounded-lg border border-black md:absolute md:top-[340px] md:left-[999px] overflow-hidden z-[32]'>
          <div className='w-[293px] h-[220px] bg-gray-300 relative z-[33]' />
          <button className='w-[222px] h-[42px] bg-green-300 rounded-lg border border-black relative overflow-hidden z-[34] mt-[29px] ml-[36px]'>
            <span className="font-semibold text-base text-black absolute inset-0 flex justify-center items-center">Change Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
