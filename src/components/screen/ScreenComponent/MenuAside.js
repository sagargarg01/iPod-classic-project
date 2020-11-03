import React, { useEffect, useContext } from 'react'
import coverFlow from '../../../assets/coverflow/coverflow'
import assets from '../../../assets/assets'
import { AppContext } from '../../../context/playContext'

const MenuAside = () => {
  const { activeState, dataIndex } = useContext(AppContext)

  useEffect(() => {
    let sildeShowImages = document.getElementsByClassName('slideShowImage')[0]

    setInterval(function () {
      sildeShowImages.setAttribute('src', coverFlow[getIndex()].images)
    }, 6000)
  }, [])

  const getIndex = () => {
    return Math.ceil(Math.random() * coverFlow.length) - 1
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
      <div className='slideShow'>
        <img src={coverFlow[1].images} alt='' className='slideShowImage' />
      </div>

      {activeState === 2 && dataIndex === 0 && <GamesImage />}

      {activeState === 3 && dataIndex === 0 && <Settings />}
    </div>
  )
}
export default MenuAside
