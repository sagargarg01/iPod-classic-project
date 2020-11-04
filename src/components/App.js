import React, { useContext, useEffect, useState } from 'react'
import assets from '../assets/assets'
import Screen from './screen/screen.js'
import ZingTouch from 'zingtouch'
import { AppContext } from '../context/playContext'
import { data } from '../data/data'

let currentAngle
let lastRoundAngle = 0

const App = () => {
  const {
    activeState,
    setActiveState,
    currentPlayStatus,
    setCurrentPlayStatus,
    play,
    setPlay,
    dataIndex,
    setDataIndex,
    isMenuVisible,
    setIsMenuVisible,
  } = useContext(AppContext)

  const increaseActive = () => {
    setActiveState((prevState) => {
      let nextActive = prevState + 1

      if (nextActive >= 5) nextActive = 5
      return nextActive
    })
  }

  const decreaseActive = () => {
    setActiveState((prevState) => {
      let nextActive = prevState - 1
      if (nextActive < 0) nextActive = 0
      return nextActive
    })
  }

  useEffect(() => {
    var containerElement = document.getElementsByClassName('container')[0]
    var region = ZingTouch.Region(containerElement)
    var childElement = document.getElementsByClassName('object')[0]
    currentAngle = 0

    region.bind(childElement, 'rotate', (e) => {
      currentAngle += e.detail.distanceFromLast
      const myAngle = Math.round(currentAngle % 360)

      if (Math.abs(lastRoundAngle - myAngle) >= 15) {
        if (e.detail.distanceFromLast > 0) {
          increaseActive()
        } else {
          decreaseActive()
        }
        lastRoundAngle = myAngle
      }
    })
  }, [])

  const handleMenuClick = () => {
    if (!isMenuVisible) {
      setIsMenuVisible(true)
    } else {
      setDataIndex((prevState) => (prevState <= 0 ? 0 : prevState - 1))
    }
  }

  const handleEnterClick = () => {
    if ((dataIndex === 0 && activeState !== 1) || dataIndex === 2) {
      setIsMenuVisible(false)

      if (dataIndex === 2) {
        setPlay(true)
        setCurrentPlayStatus(true)
      }
    } else {
      setDataIndex((prevState) =>
        prevState >= data.length - 1 ? data.length - 1 : prevState + 1
      )
      setActiveState(0)
    }
  }

  const handlePlayAndPause = () => {
    if (play) {
      let audio = document.getElementsByClassName('audio')[0]
      currentPlayStatus ? audio.pause() : audio.play()
      setCurrentPlayStatus((prevState) => !prevState)
    }
  }

  return (
    <div className='App'>
      <div className='layout'>
        <div className='body'>
          <div className='screen'>
            <Screen />
          </div>

          <div className='buttons-container container'>
            <div className='buttons object'>
              <div className='inner-disk' onClick={handleEnterClick}></div>

              <img
                src={assets.menu}
                className='menu'
                alt=''
                onClick={handleMenuClick}
              />
              <img
                src={assets.play_pause}
                className='play_pause'
                alt=''
                onClick={handlePlayAndPause}
              />
              <img src={assets.fastforward} className='fastforward' alt='' />
              <img src={assets.rewind} className='rewind' alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App
