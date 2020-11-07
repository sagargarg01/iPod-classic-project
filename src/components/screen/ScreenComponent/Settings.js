import React, { useContext } from 'react'
import assets from '../../../assets/assets'
import { AppContext } from '../../../context/playContext'
import { settings } from '../../../data/data'

function Settings() {
  const { activeState } = useContext(AppContext)
  console.log(activeState)
  return (
    <div className='setting'>
      <div className='st_cont'>
        <div>
          <img src={assets.logo} alt=''></img>
        </div>
        <div className='ipod'>iPod.js</div>
      </div>

      <div className='text'>MADE BY SAGAR GARG</div>
      {settings.map((item, index) => (
        <div
          key={item.name}
          id='setting-items'
          className={index === activeState ? 'active' : ''}
        >
          <a className='url' href={item.url} target='_blank'>
            {item.name}
          </a>
        </div>
      ))}
    </div>
  )
}

export default Settings
