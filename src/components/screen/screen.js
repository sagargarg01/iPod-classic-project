import React, { useContext } from 'react'
import MenuList from './ScreenComponent/MenuList.js'
import MusicPlayer from './ScreenComponent/MusicPlayer'
import Settings from './ScreenComponent/Settings'
import CoverFlow from './ScreenComponent/CoverFlow'
import Games from './ScreenComponent/Games'
import { AppContext } from '../../context/playContext'

function Screen() {
  const { isMenuVisible, activeState, dataIndex, play } = useContext(AppContext)

  return (
    <div className='cont'>
      {/* -------------------------------------------------------------------------------------------- */}
      {isMenuVisible && <MenuList />}

      {(play || !isMenuVisible) && (
        <div className='cont'>
          {dataIndex === 0 && activeState === 0 && <CoverFlow />}

          {/* -------------------------------------------------------------------------------------------- */}
          {(dataIndex === 2 || play) && <MusicPlayer />}

          {dataIndex === 0 && activeState === 2 && <Games />}
          {dataIndex === 0 && activeState >= 3 && <Settings />}
        </div>
      )}
    </div>
  )
}

export default Screen
