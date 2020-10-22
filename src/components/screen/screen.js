import React from 'react';
import assets from '../../assets/assets';
import MenuList from './ScreenComponent/MenuList.js';
import MusicPlayer from './ScreenComponent/MusicPlayer';
import Settings from './ScreenComponent/Settings';

function screen(props) {

    const { mainMenu, showmenu, playingStatus, play, musicmenu, musicMenuName, showSongs, activeSongId } = props;

    return (
        <div className="cont">
            {/* -------------------------------------------------------------------------------------------- */}
            <MenuList
                mainMenu={mainMenu}
                showmenu={showmenu}
                playingStatus={playingStatus}
                play={play}
                musicmenu={musicmenu}
                musicMenuName={musicMenuName}
                showSongs={showSongs}
                activeSongId={activeSongId}
            />

            <div className="cont">
                {/* -------------------------------------------------------------------------------------------- */}
                <MusicPlayer
                    playingStatus={playingStatus}
                    mainMenu={mainMenu}
                    play={play}
                    activeSongId={activeSongId}
                />

                {/* -------------------------------------------------------------------------- */}
                {/* games */}
                <div className={`${mainMenu === "games" ? "gm" : "rm"}`}>
                    <img src={assets.dice} alt=""></img>
                </div>

                {/* -------------------------------------------------------------------------- */}
                <Settings
                    mainMenu={mainMenu}
                />
            </div>
        </div >
    )
}




export default screen;