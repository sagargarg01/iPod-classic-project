import React from 'react';
import assets from '../../../assets/assets';

function NotificationBar({ playingStatus, play }) {
   return (
      <div className="notification-panel">
         <span className="noty-text">iPod.js</span>
         <span className="battery">
            <img src={assets.battery} alt="battery" className="bat" />
         </span>

         <span className={`${playingStatus ? "" : "rm"}`}>
            <span className={`${play ? "battery2" : "rm"}`}>
               <img src={assets.playic} alt="play" className="bat" />
            </span>

            <span className={`${play ? "rm" : "battery2"}`}>
               <img src={assets.pause} alt="pause" className="bat" />
            </span>
         </span>

      </div>

   );
}

export default NotificationBar;