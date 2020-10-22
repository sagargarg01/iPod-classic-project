import React from 'react';
import NotificationBar from './NotificationBar';
import coverflow from '../../../assets/coverflow/coverflow';

function MusicPlayer({ mainMenu, play, playingStatus, activeSongId }) {
   let track = coverflow[activeSongId];
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
            {(play) ? setAudio(track) : ''}
            <audio autoPlay></audio>
            <span className="timer" id="song_id" data="0">0.00</span>
            <div className="fillup" id="fill" width="0"></div>
            <span className="time">4:21</span>
         </div>

         <div className="volumeController">

         </div>
      </div>
   );
}

function setAudio(track) {
   document.getElementsByTagName('audio')[0].setAttribute('src', track.src);
}



export default MusicPlayer;