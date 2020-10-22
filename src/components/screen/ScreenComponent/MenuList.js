import React from 'react';
import coverFlow from '../../../assets/coverflow/coverflow'
import assets from '../../../assets/assets';
import NoticationBar from './NotificationBar';
import MusicMenu from './SubMenu/MusicMenu';

function MenuList({ mainMenu, showmenu, playingStatus, play, musicmenu, musicMenuName, showSongs, activeSongId }) {
   return (
      <div className={`${showmenu ? "inside-screen" : "rm"}`} >
         <div className="menu-list">

            <NoticationBar
               playingStatus={playingStatus}
               play={play}
            />

            {/* ---------------------- main list ----------------------------------------- */}
            <div className={`${musicmenu ? "rm" : "list"}`}>
               <div className={`${mainMenu === "coverflow" ? "active" : ''}`}>
                  Cover Flow
                  <span><img src={assets.arrowright} alt="right"></img></span>
               </div>

               <div className={`${mainMenu === "music" ? "active" : ''}`}>
                  Music
                  <span><img src={assets.arrowright} alt="right"></img></span>
               </div>

               <div className={`${mainMenu === "games" ? "active" : ''}`}>
                  Games
                  <span><img src={assets.arrowright} alt="right"></img></span>
               </div>

               <div className={`${mainMenu === "settings" ? "active" : ''}`}>
                  Settings
                  <span><img src={assets.arrowright} alt="right" ></img></span>
               </div>
            </div>

            {/* --------------------music sub-menu --------------------------------- */}
            <MusicMenu
               musicmenu={musicmenu}
               musicMenuName={musicMenuName}
               showSongs={showSongs}
               activeSongId={activeSongId}
            />

         </div>

         {/* -------------------------------------------------------------------------------------------- */}
         {/*                           list aside function                                   */}
         <div>
            <div className="coverflow">
               <img src={coverFlow[0].images} alt="" className="coverflowImage" />
            </div>

            <div className={`${mainMenu === "games" ? "games bg" : 'rm'}`} >
               <img src={assets.icon} alt=""></img>
               <div>
                  games
              </div>
            </div>

            <div className={`${mainMenu === "settings" ? "bg settings" : 'rm'}`} >
               <img src={assets.rIcon} alt=""></img>
               <div>iPod.js</div>
               <div className="name">by Sagar Garg</div>
            </div>
         </div>
      </div>
   );
}

function showCoverFLow() {
   let coverflowImages = document.getElementsByClassName('coverflowImage');

   setInterval(function () {
      coverflowImages[0].setAttribute('src', coverFlow[getIndex()].images);
   }, 6000);
}

function getIndex() {
   return Math.ceil(Math.random() * coverFlow.length) - 1;
}

showCoverFLow();

export default MenuList;