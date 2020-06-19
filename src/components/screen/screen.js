import React from 'react';
import battery from '../../assets/battery.svg'
import arrowright from '../../assets/arrow_right.svg'
import closer from '../../assets/coverflow/closer.png'
import icon from '../../assets/games/games-icon.png'
import rIcon from '../../assets/logo192.png'
import play from '../../assets/play.svg'
import dice from '../../assets/dice.svg'
import logo from '../../assets/ipod_logo.svg'

function screen(props) {

    const { coverflow, music, games, settings, showmenu, track, playingStatus } = props;

    return (
        <div className="cont">
            {/* -------------------------------------------------------------------------------------------- */}
            {/*                              works till menu list is visible                                 */}

            <div className={`${showmenu ? "inside-screen" : "rm"}`} >
                <div className="menu-list">

                    <div className="notification-panel">
                        <span className="noty-text">iPod.js</span>
                        <span className="battery">
                            <img src={battery} alt="battery" className="bat" />
                        </span>

                        <span className={`${playingStatus ? "battery" : "rm"}`}>
                            <img src={play} alt="battery" className="bat" />
                        </span>

                    </div>

                    <div className="list">
                        <div className={`${coverflow ? "active" : ''}`} id="coverflow">
                            CoverFlow
                       <span><img src={arrowright} alt="right"></img></span></div>

                        <div className={`${music ? "active" : ''}`} id="music">
                            Music
                       <span><img src={arrowright} alt="right"></img></span></div>

                        <div className={`${games ? "active" : ''}`} id="games">
                            Games
                       <span><img src={arrowright} alt="right"></img></span></div>

                        <div className={`${settings ? "active" : ''}`} id="settings">
                            Settings
                       <span><img src={arrowright} alt="right" ></img></span></div>
                    </div>

                </div>

            {/* -------------------------------------------------------------------------------------------- */}
                {/*                           list aside function                                   */}
                <div>
                    <div className={`${coverflow || music ? "coverflow" : 'rm'}`} >
                        <img src={closer} alt="song"></img>
                    </div>

                    <div className={`${games ? "games bg" : 'rm'}`} >
                        <img src={icon} alt=""></img>
                        <div>
                            games
                        </div>
                    </div>

                    <div className={`${settings ? "bg settings" : 'rm'}`} >
                        <img src={rIcon} alt=""></img>
                        <div>iPod.js</div>
                        <div className="name">by Sagar Garg</div>
                    </div>
                </div>
            </div>

            {/* -------------------------------------------------------------------------------------------- */}
            {/* this div is now gonna work in opposite manner, when above is working it will be none and when that becomes none , this will work */}

            <div className="cont">

            {/* -------------------------------------------------------------------------------------------- */}
            {/* music player */}
                <div className={`${coverflow ? "mp" : "rm"}`}>
                    <div className="notification-panel2">
                        <span className="noty-text">Now Playing</span>
                        <span className="battery2">
                            <img src={battery} alt="battery" className="bat" />
                        </span>
                        <span className="battery2">
                            <img src={play} alt="battery" className="bat" />
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
                        <span className="timer" id="song_id">0.00</span>
                        <div className="fillup"></div>
                        <span className="time">4:21</span>
                    </div>
                </div>


                {/* -------------------------------------------------------------------------- */}
                {/* games */}
                <div className={`${games ? "gm" : "rm"}`}>
                    <img src={dice} alt=""></img>
                </div>

                {/* -------------------------------------------------------------------------- */}
                {/* settings */}
                <div className={`${settings ? "setting" : "rm"}`}>
                    <div>
                        <img src={logo} alt=""></img>
                    </div>
                    <div className="text">
                        MADE BY SAGAR GARG
                    </div>
                </div>
            </div>
        </div>
    )
}


export default screen;