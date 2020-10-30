import React from 'react'
import assets from '../../../assets/assets'
import NoticationBar from './NotificationBar'
import MusicMenu from './SubMenu/MusicMenu'
import MenuAside from './MenuAside'

function MenuList({
  mainMenu,
  playingStatus,
  play,
  musicmenu,
  musicMenuName,
  showSongs,
  activeSongId,
}) {
  const MainList = () => {
    return (
      <div className='list'>
        <div className={`${mainMenu === 'coverflow' ? 'active' : ''}`}>
          Cover Flow
          <span>
            <img src={assets.arrowright} alt='right'></img>
          </span>
        </div>

        <div className={`${mainMenu === 'music' ? 'active' : ''}`}>
          Music
          <span>
            <img src={assets.arrowright} alt='right'></img>
          </span>
        </div>

        <div className={`${mainMenu === 'games' ? 'active' : ''}`}>
          Games
          <span>
            <img src={assets.arrowright} alt='right'></img>
          </span>
        </div>

        <div className={`${mainMenu === 'settings' ? 'active' : ''}`}>
          Settings
          <span>
            <img src={assets.arrowright} alt='right'></img>
          </span>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className='inside-screen'>
        <div className='menu-list'>
          <NoticationBar playingStatus={playingStatus} play={play} />

          {!musicmenu && <MainList />}

          {musicmenu && (
            <MusicMenu
              musicmenu={musicmenu}
              musicMenuName={musicMenuName}
              showSongs={showSongs}
              activeSongId={activeSongId}
            />
          )}
        </div>
        {/* have to use some memo to stop its continous rendering */}
        <MenuAside mainMenu={mainMenu} />
      </div>
    </>
  )
}

export default MenuList
