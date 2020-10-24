import React from 'react';
import NotficationBar from './NotificationBar';

function CoverFlow({ mainMenu, playingStatus, play }) {
   return (
      <div className={mainMenu === "coverflow" ? '' : 'rm'}>
         <NotficationBar
            playingStatus={playingStatus}
            play={play}
         />
         Hi I am CoverFlow
      </div>
   );
}

export default CoverFlow;