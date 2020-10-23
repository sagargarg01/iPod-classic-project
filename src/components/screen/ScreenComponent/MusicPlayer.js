import React, { useState } from 'react';
import NotificationBar from './NotificationBar';
import coverflow from '../../../assets/coverflow/coverflow';
import ReactAudioPlayer from 'react-audio-player';

function MusicPlayer({ mainMenu, play, playingStatus, playingSongId }) {
   let track = coverflow[playingSongId];

   const [timer, setTimer] = useState([]);
   const [bar, setBar] = useState([]);

   return (
      <div className={`${mainMenu === "music" ? "mp" : "rm"}`}>

         <NotificationBar
            playingStatus={playingStatus}
            play={play}
         />

         <div className="content">
            <div className="thumbnail">
               <img src={track.images} alt=""></img>
            </div>
            <div className="description">
               <div className="songName">
                  {track.name}
               </div>
               <div>{track.album}</div>
               <div className="artist"> <span>Composed by</span>  {track.artist} </div>
            </div>
         </div>


         <div className="player">
            <ReactAudioPlayer className="audio" src={track.src} onLoadedMetadata={() => {

               if (timer) {
                  clearInterval(timer);
               }
               if (bar) {
                  clearInterval(bar);
               }

               if (playingStatus) {
                  startMusic(setTimer, setBar)
               }
            }} />

            <span className="timer">0.00</span>
            <div className="fillup"></div>
            <span className="time"></span>
         </div>

         <div className="volumeController">

         </div>
      </div>
   );
}


function startMusic(setTimer, setBar) {
   let audio = getElement('audio');
   audio.play();

   setDuration()
   timer(setTimer)
   fillBar(setBar)
}

function getElement(element) {
   return document.getElementsByClassName(element)[0];
}

function setDuration() {
   let duration = parseInt(getElement('audio').duration)

   let min = parseInt(duration / 60);
   let sec = parseInt(duration % 60);
   getElement('time').innerHTML = (sec < 10) ? `${min}:0${sec}` : `${min}:${sec}`;
}

// fills the music bar 
function fillBar(setBar) {
   var bar = getElement('fillup');
   let audio = getElement('audio');
   let duration = audio.duration;
   let base = (duration / 100);

   setBar(setInterval(function () {
      let ct = parseInt(audio.currentTime);
      let width = parseInt(ct / base);
      bar.style.width = `${width}%`

   }, duration * 10)
   )
}

// -------------------------------------------------------------
// music timer function
function timer(setTimer) {

   var timer = getElement('timer');
   let audio = getElement('audio');

   setTimer(
      setInterval(function () {
         let ct = parseInt(audio.currentTime)

         let min = parseInt(ct / 60);
         let sec = parseInt(ct % 60);
         timer.innerText = (sec < 10) ? `${min}:0${sec}` : `${min}:${sec}`;

      }, 1000)
   )
}


export default MusicPlayer;