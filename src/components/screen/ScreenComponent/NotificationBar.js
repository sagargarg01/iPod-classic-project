import React from 'react'
import { useContext } from 'react'
import assets from '../../../assets/assets'
import { AppContext } from '../../../context/playContext'

const NotificationBar = React.memo(() => {
  const { play, currentPlayStatus } = useContext(AppContext)

  return (
    <div className='notification-panel'>
      <span className='noty-text'>iPod.js</span>
      <span className='battery'>
        <img src={assets.battery} alt='battery' className='bat' />
      </span>

      <span className={`${play ? '' : 'rm'}`}>
        <span className={`${currentPlayStatus ? 'battery2' : 'rm'}`}>
          <img src={assets.playic} alt='play' className='bat' />
        </span>

        <span className={`${currentPlayStatus ? 'rm' : 'battery2'}`}>
          <img src={assets.pause} alt='pause' className='bat' />
        </span>
      </span>
    </div>
  )
})

export default NotificationBar
