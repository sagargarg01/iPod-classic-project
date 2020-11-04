import React, { useState, useContext } from 'react'
import NotificationBar from './NotificationBar'
import coverflow from '../../../assets/coverflow/coverflow'
import ReactAudioPlayer from 'react-audio-player'
import { AppContext } from '../../../context/playContext'

const MusicPlayer = () => {
  const { play, activeState, currentPlayStatus } = useContext(AppContext)
  let track = coverflow[activeState]
  const [timer, setTimer] = useState([])
  const [bar, setBar] = useState([])

  const getElement = (element) => {
    return document.getElementsByClassName(element)[0]
  }

  const fillTimer = () => {
    var timer = getElement('timer')
    let audio = getElement('audio')

    setTimer(
      setInterval(function () {
        let ct = parseInt(audio.currentTime)

        let min = parseInt(ct / 60)
        let sec = parseInt(ct % 60)
        timer.innerText = sec < 10 ? `${min}:0${sec}` : `${min}:${sec}`
      }, 1000)
    )
  }

  const fillBar = () => {
    var bar = getElement('fillup')
    let audio = getElement('audio')
    let duration = audio.duration
    let base = duration / 100

    setBar(
      setInterval(function () {
        let ct = parseInt(audio.currentTime)
        let width = parseInt(ct / base)
        bar.style.width = `${width}%`
      }, duration * 10)
    )
  }

  const setDuration = () => {
    let duration = parseInt(getElement('audio').duration)

    let min = parseInt(duration / 60)
    let sec = parseInt(duration % 60)
    getElement('time').innerHTML = sec < 10 ? `${min}:0${sec}` : `${min}:${sec}`
  }

  const startMusic = () => {
    getElement('audio').play()

    setDuration()
    fillTimer()
    fillBar()
  }

  return (
    <div className='mp'>
      <NotificationBar />

      <div className='content'>
        <div className='thumbnail'>
          <img src={track.images} alt=''></img>
        </div>
        <div className='description'>
          <div className='songName'>{track.name}</div>
          <div>{track.album}</div>
          <div className='artist'>
            {' '}
            <span>Composed by</span> {track.artist}{' '}
          </div>
        </div>
      </div>

      <div className='player'>
        <ReactAudioPlayer
          className='audio'
          src={track.src}
          onLoadedMetadata={() => {
            if (timer) {
              clearInterval(timer)
            }
            if (bar) {
              clearInterval(bar)
            }

            if (play) {
              startMusic()
            }
          }}
        />

        <span className='timer'>0.00</span>
        <div className='fillup'></div>
        <span className='time'></span>
      </div>

      <div className='volumeController'></div>
    </div>
  )
}

export default MusicPlayer
