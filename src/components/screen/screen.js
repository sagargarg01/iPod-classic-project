import React from 'react';
import assets from '../../assets/assets';
import MenuList from './ScreenComponent/MenuList.js';
import MusicPlayer from './ScreenComponent/MusicPlayer';
import Settings from './ScreenComponent/Settings';
import CoverFlow from './ScreenComponent/CoverFlow';

function screen(props) {

    const { mainMenu, showmenu, playingStatus, play, musicmenu, musicMenuName, showSongs, activeSongId, playingSongId } = props;

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
                {/* coverflow */}
                <CoverFlow
                    mainMenu={mainMenu}
                    playingStatus={playingStatus}
                    play={play}
                />

                {/* -------------------------------------------------------------------------------------------- */}
                <MusicPlayer
                    playingStatus={playingStatus}
                    mainMenu={mainMenu}
                    play={play}
                    playingSongId={playingSongId}
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