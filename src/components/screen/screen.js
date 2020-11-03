import React from 'react'
import MenuList from './ScreenComponent/MenuList.js'
import MusicPlayer from './ScreenComponent/MusicPlayer'
import Settings from './ScreenComponent/Settings'
import CoverFlow from './ScreenComponent/CoverFlow'
import Games from './ScreenComponent/Games'

function screen({
  mainMenu,
  showmenu,
  playingStatus,
  play,
  musicmenu,
  musicMenuName,
  showSongs,
  activeSongId,
  playingSongId,
}) {
  const Functionality = () => {
    return (
      <div className='cont'>
        {mainMenu === 'coverflow' && (
          <CoverFlow
            mainMenu={mainMenu}
            playingStatus={playingStatus}
            play={play}
          />
        )}

        {/* -------------------------------------------------------------------------------------------- */}
        {mainMenu === 'music' && (
          <MusicPlayer
            playingStatus={playingStatus}
            mainMenu={mainMenu}
            play={play}
            playingSongId={playingSongId}
          />
        )}

        {mainMenu === 'games' && <Games />}
        {mainMenu === 'settings' && <Settings />}
      </div>
    )
  }

  return (
    <div className='cont'>
      {/* -------------------------------------------------------------------------------------------- */}
      <MenuList />

      {!showmenu && <Functionality />}
    </div>
  )
}

export default screen
