import React from 'react'
import assets from '../../../assets/assets'

function Settings() {
  return (
    <div className='setting'>
      <div className='st_cont'>
        <div>
          <img src={assets.logo} alt=''></img>
        </div>
        <div className='ipod'>iPod.js</div>
      </div>

      <div className='text'>MADE BY SAGAR GARG</div>
    </div>
  )
}

export default Settings
