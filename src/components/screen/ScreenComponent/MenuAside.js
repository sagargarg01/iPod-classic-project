import React, { useEffect } from 'react'
import coverFlow from '../../../assets/coverflow/coverflow'
import assets from '../../../assets/assets'
import { useState } from 'react'

const MenuAside = ({ mainMenu }) => {
  const startSlideShow = () => {
    let sildeShowImages = document.getElementsByClassName('slideShowImage')[0]

    setInterval(function () {
      sildeShowImages.setAttribute('src', coverFlow[getIndex()].images)
    }, 6000)
  }

  const getIndex = () => {
    return Math.ceil(Math.random() * coverFlow.length) - 1
  }

  const SlideShow = () => {
    return (
      <div className='slideShow'>
        <img
          src={coverFlow[getIndex()].images}
          alt=''
          className='slideShowImage'
          onLoad={startSlideShow}
        />
      </div>
    )
  }

  const GamesImage = () => {
    return (
      <div className='games bg'>
        <img src={assets.icon} alt=''></img>
        <div>games</div>
      </div>
    )
  }

  const Settings = () => {
    return (
      <div className='bg settings'>
        <img src={assets.rIcon} alt=''></img>
        <div>iPod.js</div>
        <div className='name'>by Sagar Garg</div>
      </div>
    )
  }

  return (
    <div>
      {/* check if use Memo could help here, have to change complete implementation yrr */}
      <SlideShow />

      {mainMenu === 'games' && <GamesImage />}

      {mainMenu === 'settings' && <Settings />}
    </div>
  )
}

export default MenuAside
