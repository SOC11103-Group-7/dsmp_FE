import React from 'react';
import './index.css';


export default function Main() {
  return (
    <div className='main-container'>
      <div className='sidebar'>
        <div className='logo' />
        <div className='nav-links'>
          <span className='nav-link'><div className='homeicon' />Home</span>
          <span className='nav-link'><div className='profileicon' />Profile</span>
        </div>
        <button className='user-hash-btn'>User Hash Here</button>
        <button className='connect-btn'>Connect</button>
      </div>
      <div className='content'>
        <div className='post-input'>
          <input type='text' placeholder="What's on your mind??" />
         
        </div>
        <button className='post-btn'>Post</button>
        <div className='post'>
          <div className='user-avatar' />

            <div className='user-details'>
              <span className='username'>John Doe</span>
              <span className='post-time'>25mins ago</span>

            <p className='post-content'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <span className='tip-amount'>0.0ETH</span>
          <button className='tip-btn'>Tip 0.1ETH</button>
        </div>
        {/* Additional posts can be added here */}
      </div>
    </div>
  );
}
