import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [play, setPlay] = useState(false)
  const [currentPlayStatus, setCurrentPlayStatus] = useState(false)
  const [activeState, setActiveState] = useState(0)
  const [dataIndex, setDataIndex] = useState(0)

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
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
