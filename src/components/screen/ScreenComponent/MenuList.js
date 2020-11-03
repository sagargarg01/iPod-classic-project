import React, { useContext } from 'react'
import assets from '../../../assets/assets'
import NoticationBar from './NotificationBar'
import MenuAside from './MenuAside'
import { AppContext } from '../../../context/playContext'
import { data } from '../../../data/data'

function MenuList() {
  const { activeState, dataIndex } = useContext(AppContext)
  const Data = data[dataIndex]

  return (
    <>
      <div className='inside-screen'>
        <div className='menu-list'>
          <NoticationBar />
          <div className='list'>
            {Data.map((item, index) => (
              <div
                key={`${index}-${item}`}
                className={
                  // kind of cheat but nothing seems to work
                  index === data[dataIndex].length - 1
                    ? activeState >= index
                      ? 'active'
                      : ''
                    : activeState === index
                    ? 'active'
                    : ''
                }
              >
                {item}
                <span>
                  <img src={assets.arrowright} alt='right'></img>
                </span>
              </div>
            ))}
          </div>
        </div>

        <MenuAside />
      </div>
    </>
  )
}

export default MenuList
