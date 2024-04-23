import React from 'react';
import './Profile.css';
import HomeIcon from '../../assets/images/home.png';
import ProfileIcon from '../../assets/images/profile.png';
import UserAvatar from '../../assets/images/78919fd0-ee13-4419-80f3-1c857dd6aea4.png';
import LogoImage from '../../assets/images/96858bf39fb28499437875ab86a6d1dcd335a243.png';
import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div className='flex flex-col md:flex-row bg-yellow-50'>
      <div className='w-full md:w-64 border-r border-black overflow-hidden'>
        {/* Sidebar content */}
        <div className='m-4'>
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
              <span className='flex items-center text-base font-semibold text-gray-900 mt-4  text-xl'>
                <div className='w-4 h-4 bg-cover bg-center bg-no-repeat mr-2' style={{ backgroundImage: `url(${ProfileIcon})` }} />
                Profile
              </span>
            </Link>
          </div>
          <button className='w-full h-10 mt-6 bg-orange-700 font-medium text-white border border-black rounded-lg overflow-hidden'>User Hash Here</button>
          <button className='w-full h-10 mt-2 bg-green-300 font-medium border border-black rounded-lg overflow-hidden'>Connect</button>
        </div>
      </div>
      <div className='flex flex-col w-full md:w-1/2 px-10'>
        {/* Profile content */}
        <div className='w-full md:w-[220px] h-[220px] bg-[#d9d9d9] md:absolute md:top-[95px] md:left-[290px] z-[16]' />
        <div className='w-full md:w-[599px] h-[58px] rounded-[5px] border-solid border-2 border-[#000] md:absolute md:top-[105px] md:left-[547px] overflow-hidden z-[17]'>

          <input type="file" className='hidden' id="fileInput" />
          <label htmlFor="fileInput" className="w-full h-[58px] bg-transparent border-none absolute top-[-2px] left-[-2px] z-20 cursor-pointer">
            <span className="flex h-[22px] justify-start items-start font-['Raleway'] text-[19px] font-semibold leading-[22px] text-[#000] absolute top-[16px] left-[16px] text-left whitespace-nowrap z-[18]">
              Choose File
            </span>
          </label>
        </div>
        <div className='w-full md:w-[599px] h-[58px] text-[0px] rounded-[5px] border-solid border-2 border-[#000] md:absolute md:top-[188px] md:left-[547px] overflow-hidden z-[21]'>
          <input type="text" className='w-full h-[58px] bg-transparent border-none absolute top-[-2px] left-[-2px] z-[23]' placeholder="Enter username" />
        </div>
        <button className='w-full md:w-[175px] h-[42px] bg-[#a2e3a0] rounded-[11.852px] border-solid border-2 border-[#000] md:absolute md:top-[264px] md:left-[548px] overflow-hidden z-[14] pointer'>
          <span className="flex h-[20px] justify-start items-start font-['Raleway'] text-[16.93152618408203px] font-semibold leading-[19.878px] text-[#2f2f2a] absolute top-[calc(50%-12px)] left-[calc(50%-65.5px)] text-left whitespace-nowrap z-[15]">
            Mint This Profile
          </span>
        </button>
        <span className="flex h-[28px] justify-start items-start font-['Raleway'] text-[23.92989158630371px] font-semibold leading-[28px] text-[#000] md:absolute md:top-[383px] md:left-[290px] text-left whitespace-nowrap z-[36]">
          Recent Profile
        </span>
        <div className='w-full md:w-[293px] h-[310px] rounded-[5px] border-solid border-[3px] border-[#000] md:absolute md:top-[461px] md:left-[290px] overflow-hidden z-[24]'>
          <div className='w-[293px] h-[220px] bg-[#d9d9d9] relative z-[25] mt-0 mr-0 mb-0 ml-0' />
          <button className='w-[222px] h-[42px] bg-[#a2e3a0] rounded-[11.852px] border-solid border-2 border-[#000] relative overflow-hidden z-[26] pointer mt-[29px] mr-0 mb-0 ml-[36px]'>
            <span className="flex h-[20px] justify-start items-start font-['Raleway'] text-[16.93152618408203px] font-semibold leading-[19.878px] text-[#2f2f2a] absolute top-[calc(50%-12px)] left-[calc(50%-61px)] text-left whitespace-nowrap z-[27]">
              Change Profile
            </span>
          </button>
        </div>
        <div className='w-full md:w-[293px] h-[310px] rounded-[5px] border-solid border-[3px] border-[#000] md:absolute md:top-[461px] md:left-[644px] overflow-hidden z-[28]'>
          <div className='w-[293px] h-[220px] bg-[#d9d9d9] relative z-[29] mt-0 mr-0 mb-0 ml-0' />
          <button className='w-[222px] h-[42px] bg-[#a2e3a0] rounded-[11.852px] border-solid border-2 border-[#000] relative overflow-hidden z-30 pointer mt-[29px] mr-0 mb-0 ml-[36px]'>
            <span className="flex h-[20px] justify-start items-start font-['Raleway'] text-[16.93152618408203px] font-semibold leading-[19.878px] text-[#2f2f2a] absolute top-[calc(50%-12px)] left-[calc(50%-61px)] text-left whitespace-nowrap z-[31]">
              Change Profile
            </span>
          </button>
        </div>
        <div className='w-full md:w-[293px] h-[310px] rounded-[5px] border-solid border-[3px] border-[#000] md:absolute md:top-[461px] md:left-[999px] overflow-hidden z-[32]'>
          <div className='w-[293px] h-[220px] bg-[#d9d9d9] relative z-[33] mt-0 mr-0 mb-0 ml-0' />
          <button className='w-[222px] h-[42px] bg-[#a2e3a0] rounded-[11.852px] border-solid border-2 border-[#000] relative overflow-hidden z-[34] pointer mt-[29px] mr-0 mb-0 ml-[36px]'>
            <span className="flex h-[20px] justify-start items-start font-['Raleway'] text-[16.93152618408203px] font-semibold leading-[19.878px] text-[#2f2f2a] absolute top-[calc(50%-12px)] left-[calc(50%-61px)] text-left whitespace-nowrap z-[35]">
              Change Profile
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}