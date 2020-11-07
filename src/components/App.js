import React, { useContext, useEffect, useState } from 'react'
import assets from '../assets/assets'
import Screen from './screen/screen.js'
import ZingTouch from 'zingtouch'
import { AppContext } from '../context/playContext'
import { data, settings, coverflow } from '../data/data'

let currentAngle
let lastRoundAngle = 0

const App = () => {
  const [bindedRegion, setBindedRegion] = useState()

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
    setsongID,
    activeComponent,
    setactiveComponent,
  } = useContext(AppContext)

  const increaseActive = (length) => {
    setActiveState((prevState) => {
      let nextActive = prevState + 1

      if (nextActive >= length) nextActive = length
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

  const showIcon = (vol) => {
    let volumeDOM = document.getElementsByClassName('volumeController')[0]
    volumeDOM.innerHTML = ` <div> <img src = 
          ${parseInt(vol * 100) < 45 ? assets.lowVolume : assets.volume} />
         </div>
        <div className = "volume">${parseInt(vol * 100)}</div>`

    setTimeout(() => {
      volumeDOM.innerHTML = ''
    }, 10000)
  }

  const increaseVolume = () => {
    let audio = document.getElementsByClassName('audio')[0]

    let vol = parseInt(audio.volume * 100) / 100.0
    audio.volume = vol + 0.02 >= 1 ? 1 : vol + 0.02
    showIcon(audio.volume)
  }

  const decreaseVolume = () => {
    let audio = document.getElementsByClassName('audio')[0]

    let vol = parseInt(audio.volume * 100) / 100.0
    audio.volume = vol - 0.02 <= 0 ? 0 : vol - 0.02
    showIcon(audio.volume)
  }

  useEffect(() => {
    if (bindedRegion) {
      bindedRegion.unbind(
        document.getElementsByClassName('object')[0],
        'rotate'
      )
    }

    var containerElement = document.getElementsByClassName('container')[0]
    var region = ZingTouch.Region(containerElement)
    var childElement = document.getElementsByClassName('object')[0]
    currentAngle = 0
    setBindedRegion(region)

    region.bind(childElement, 'rotate', (e) => {
      currentAngle += e.detail.distanceFromLast
      const myAngle = Math.round(currentAngle % 360)

      if (Math.abs(lastRoundAngle - myAngle) >= 15) {
        if (isMenuVisible) {
          e.detail.distanceFromLast > 0
            ? increaseActive(data[dataIndex].length - 1)
            : decreaseActive()
        } else if (activeComponent === 0) {
          e.detail.distanceFromLast > 0
            ? increaseActive(coverflow.length - 1)
            : decreaseActive()
        } else if (activeComponent === 3) {
          e.detail.distanceFromLast > 0
            ? increaseActive(settings.length - 1)
            : decreaseActive()
        } else if (play) {
          e.detail.distanceFromLast > 0 ? increaseVolume() : decreaseVolume()
        }

        lastRoundAngle = myAngle
      }
    })
  }, [isMenuVisible, dataIndex])

  const handleMenuClick = () => {
    isMenuVisible === false
      ? setIsMenuVisible(true)
      : setDataIndex((prevState) => (prevState === 0 ? 0 : prevState - 1))

    setActiveState(0)
  }

  const handleEnterClick = () => {
    if (isMenuVisible) {
      dataIndex === 0 && setactiveComponent(activeState)

      if (activeState !== 1 && dataIndex === 0) {
        setIsMenuVisible(false)
        setActiveState(0)
      } else if (dataIndex === 2) {
        setIsMenuVisible(false)
        setPlay(true)
        setCurrentPlayStatus(true)
        setsongID(activeState)
      } else {
        setDataIndex((prevState) =>
          prevState >= data.length - 1 ? data.length - 1 : prevState + 1
        )
        setActiveState(0)
      }
    } else {
      if (activeComponent === 0) {
        setPlay(true)
        setCurrentPlayStatus(true)
        setsongID(activeState)
      } else if (activeComponent === 3) {
        let url = document
          .getElementsByClassName('url')
          [activeState].getAttribute('href')
        window.open(url)
      }
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
