import React from 'react';
import assets from '../../../../assets/assets'
import list from '../../../../assets/coverflow/coverflow'

function MusicMenu({ musicmenu, musicMenuName, showSongs, activeSongId }) {
   return (
      <div>
         <div className={`${musicmenu && !showSongs ? "list" : "rm"}`}>
            <div className={`${musicMenuName === "artist" ? "active" : ''}`}>
               Artist
            <span><img src={assets.arrowright} alt="right"></img></span>
            </div>

            <div className={`${musicMenuName === "albums" ? "active" : ''}`}>
               Album
            <span><img src={assets.arrowright} alt="right"></img></span>
            </div>
         </div>

         <div className={`${showSongs ? "list" : "rm"}`}>
            {list.map((item) =>
               <div className={activeSongId === item._id ? 'active' : ''}>
                  {item.name}
               </div>
            )}
         </div>
      </div>
   );
}

export default MusicMenu;