import React from 'react'
import { useContext } from 'react'
import assets from '../../../assets/assets'
import { AppContext } from '../../../context/playContext'

function NotificationBar() {
  const { play, currentPlayingStatus } = useContext(AppContext)

  return (
    <div className='notification-panel'>
      <span className='noty-text'>iPod.js</span>
      <span className='battery'>
        <img src={assets.battery} alt='battery' className='bat' />
      </span>

      <span className={`${play ? '' : 'rm'}`}>
        <span className={`${currentPlayingStatus ? 'battery2' : 'rm'}`}>
          <img src={assets.playic} alt='play' className='bat' />
        </span>

        <span className={`${currentPlayingStatus ? 'rm' : 'battery2'}`}>
          <img src={assets.pause} alt='pause' className='bat' />
        </span>
      </span>
    </div>
  )
}

export default NotificationBar
