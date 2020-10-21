import React from 'react';
import coverFlow from '../../../assets/coverflow/coverflow'
import assets from '../../../assets/assets';
import NoticationBar from './NotificationBar';

function MenuList({ showmenu, playingStatus, play, coverflow, musicmenu, music, games, settings, artist, albums }) {
   return (
      <div className={`${showmenu ? "inside-screen" : "rm"}`} >
         <div className="menu-list">

            <NoticationBar
               playingStatus={playingStatus}
               play={play}
            />

            {/* ---------------------- main list ----------------------------------------- */}
            <div className={`${musicmenu ? "rm" : "list"}`}>
               <div className={`${coverflow ? "active" : ''}`}>
                  Cover Flow
             <span><img src={assets.arrowright} alt="right"></img></span></div>

               <div className={`${music ? "active" : ''}`}>
                  Music
             <span><img src={assets.arrowright} alt="right"></img></span></div>

               <div className={`${games ? "active" : ''}`}>
                  Games
             <span><img src={assets.arrowright} alt="right"></img></span></div>

               <div className={`${settings ? "active" : ''}`}>
                  Settings
             <span><img src={assets.arrowright} alt="right" ></img></span></div>
            </div>

            {/* --------------------music sub-menu --------------------------------- */}
            <div className={`${musicmenu ? "list" : "rm"}`}>
               <div className={`${artist ? "active" : ''}`}>
                  Artist
             <span><img src={assets.arrowright} alt="right"></img></span></div>

               <div className={`${albums ? "active" : ''}`}>
                  Album
             <span><img src={assets.arrowright} alt="right"></img></span></div>
            </div>

         </div>

         {/* -------------------------------------------------------------------------------------------- */}
         {/*                           list aside function                                   */}
         <div>
            <div className={`${coverflow || music ? "coverflow" : 'rm'}`} >
               <img src={
                  getRandom()
               } alt="song"></img>
            </div>

            <div className={`${games ? "games bg" : 'rm'}`} >
               <img src={assets.icon} alt=""></img>
               <div>
                  games
              </div>
            </div>

            <div className={`${settings ? "bg settings" : 'rm'}`} >
               <img src={assets.rIcon} alt=""></img>
               <div>iPod.js</div>
               <div className="name">by Sagar Garg</div>
            </div>
         </div>
      </div>
   );
}
function getRandom() {
   return coverFlow[Math.ceil(Math.random() * coverFlow.length) - 1].images;
}

export default MenuList;