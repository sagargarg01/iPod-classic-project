import React from 'react';
import NotificationBar from './NotificationBar';
import coverflow from '../../../assets/coverflow/coverflow';
import ReactAudioPlayer from 'react-audio-player';

function MusicPlayer({ mainMenu, play, playingStatus, playingSongId, startMusic }) {
   let track = coverflow[playingSongId];
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
            <ReactAudioPlayer className="audio" src={track.src} onLoadedMetadata={() => playingStatus ? startMusic() : null} />
            <span className="timer" id="song_id" data="0">0.00</span>
            <div className="fillup" id="fill" width="0"></div>
            <span className="time">4:21</span>
         </div>

         <div className="volumeController">

         </div>
      </div>
   );
}


export default MusicPlayer;