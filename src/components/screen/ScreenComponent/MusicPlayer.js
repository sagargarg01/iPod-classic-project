import React, { useState, useContext, useEffect } from 'react'
import NotificationBar from './NotificationBar'
import coverflow from '../../../assets/coverflow/coverflow'
import ReactAudioPlayer from 'react-audio-player'
import { AppContext } from '../../../context/playContext'
import { data } from '../../../data/data'

const MusicPlayer = () => {
  const { play, songID, setPlay, setCurrentPlayStatus } = useContext(AppContext)

  useEffect(() => {
    if (play) {
      var timerDOM = getElement('timer')
      let audio = getElement('audio')

      setInterval(() => {
        let ct = parseInt(audio.currentTime)

        if (audio.currentTime === audio.duration) {
          setPlay(false)
          setCurrentPlayStatus(false)
          data[0].splice(4, 1)
        }

        let min = parseInt(ct / 60)
        let sec = parseInt(ct % 60)
        timerDOM.innerText = sec < 10 ? `${min}:0${sec}` : `${min}:${sec}`
      }, 1000)
    }
  }, [play])

  useEffect(() => {
    setTimeout(() => {
      if (play) {
        let audio = getElement('audio')
        var barWidth = getElement('fillup')
        let duration = audio.duration
        let base = duration / 100

        setInterval(function () {
          let ct = parseInt(audio.currentTime)
          let width = parseInt(ct / base)
          barWidth.style.width = `${width}%`
        }, duration * 10)
      }
    }, 1000)
  }, [play])

  let track = coverflow[songID]

  const getElement = (element) => {
    return document.getElementsByClassName(element)[0]
  }

  const setDuration = () => {
    let duration = parseInt(getElement('audio').duration)

    let min = parseInt(duration / 60)
    let sec = parseInt(duration % 60)
    getElement('time').innerHTML = sec < 10 ? `${min}:0${sec}` : `${min}:${sec}`
  }

  const startMusic = () => {
    document.title = `iPod.js | ${track.album}`
    data[0].length === 4 && data[0].push('Now Playing')
    getElement('audio').play()

    setDuration()
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
          onLoadedMetadata={() => startMusic()}
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
