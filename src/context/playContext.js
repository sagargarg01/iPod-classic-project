import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [play, setPlay] = useState(false)
  const [currentPlayStatus, setCurrentPlayStatus] = useState(false)
  const [songID, setsongID] = useState(0)
  const [activeState, setActiveState] = useState(0)
  const [dataIndex, setDataIndex] = useState(0)
  const [isMenuVisible, setIsMenuVisible] = useState(true)

  return (
    <AppContext.Provider
      value={{
        activeState,
        setActiveState,
        play,
        setPlay,
        currentPlayStatus,
        setCurrentPlayStatus,
        dataIndex,
        setDataIndex,
        isMenuVisible,
        setIsMenuVisible,
        songID,
        setsongID,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
