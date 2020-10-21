import React from 'react';
import assets from '../../assets/assets';
import MenuList from './ScreenComponent/MenuList.js';

function screen(props) {

    const { coverflow, music, games, settings, showmenu, track, playingStatus, play, artist, albums, musicmenu } = props;

    return (
        <div className="cont">
            {/* -------------------------------------------------------------------------------------------- */}
            {/*                              works till menu list is visible                                 */}

            <MenuList
                showmenu={showmenu}
                playingStatus={playingStatus}
                coverflow={coverflow}
                play={play}
                musicmenu={musicmenu}
                music={music}
                games={games}
                settings={settings}
                artist={artist}
                albums={albums}
            />

            {/* -------------------------------------------------------------------------------------------- */}
            {/* this div is now gonna work in opposite manner, when above is working it will be none 
                and when that becomes none , this will work */}

            <div className="cont">

                {/* -------------------------------------------------------------------------------------------- */}
                {/* music player */}
                <div className={`${coverflow || music ? "mp" : "rm"}`}>
                    <div className="notification-panel2">
                        <span className="noty-text">Now Playing</span>
                        <span className="battery2">
                            <img src={assets.battery} alt="battery" className="bat" />
                        </span>
                        <span className={`${playingStatus ? "" : "rm"}`}>
                            <span className={`${play ? "battery2" : "rm"}`}>
                                <img src={assets.playic} alt="play" className="bat" />
                            </span>

                            <span className={`${assets.play ? "rm" : "battery2"}`}>
                                <img src={assets.pause} alt="pause" className="bat" />
                            </span>
                        </span>

                    </div>

                    <div className="content">
                        <div className="thumbnail">
                            <img src={track.artwork} alt=""></img>
                        </div>
                        <div className="description">
                            <div className="songName">
                                {track.name}
                            </div>
                            <div>{track.album}</div>
                            <div className="artist"> <span>Composed by</span>  {track.artist} </div>
                        </div>
                    </div>

                    <div className="player">
                        <audio>
                            <source src={track.source}></source>
                        </audio>
                        <span className="timer" id="song_id" data="0">0.00</span>
                        <div className="fillup" id="fill" width="0"></div>
                        <span className="time">4:21</span>
                    </div>
                </div>


                {/* -------------------------------------------------------------------------- */}
                {/* games */}
                <div className={`${games ? "gm" : "rm"}`}>
                    <img src={assets.dice} alt=""></img>
                </div>

                {/* -------------------------------------------------------------------------- */}
                {/* settings */}
                <div className={`${settings ? "setting" : "rm"}`}>
                    <div className="st_cont">
                        <div>
                            <img src={assets.logo} alt=""></img>
                        </div>
                        <div className="ipod">
                            iPod.js
                    </div>
                    </div>

                    <div className="text">
                        MADE BY SAGAR GARG
                    </div>
                </div>
            </div>
        </div >
    )
}




export default screen;