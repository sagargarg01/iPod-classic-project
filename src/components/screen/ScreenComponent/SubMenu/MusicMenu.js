import React from 'react'
import assets from '../../../../assets/assets'
import list from '../../../../assets/coverflow/coverflow'

function MusicMenu({ musicmenu, musicMenuName, showSongs, activeSongId }) {
  const List = () => {
    return (
      <div className='list'>
        <div className={`${musicMenuName === 'artist' ? 'active' : ''}`}>
          Artist
          <span>
            <img src={assets.arrowright} alt='right'></img>
          </span>
        </div>

        <div className={`${musicMenuName === 'albums' ? 'active' : ''}`}>
          Album
          <span>
            <img src={assets.arrowright} alt='right'></img>
          </span>
        </div>
      </div>
    )
  }

  const SongsList = () => {
    return (
      <div className='list'>
        {list.map((item) => (
          <div
            key={item._id}
            className={activeSongId === item._id ? 'active' : ''}
          >
            {item.name}
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      {!showSongs && <List />}
      {showSongs && <SongsList />}
    </>
  )
}

export default MusicMenu
