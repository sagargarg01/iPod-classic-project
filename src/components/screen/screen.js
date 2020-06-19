import React from 'react';
import battery from '../../assets/battery.svg'
import arrowright from '../../assets/arrow_right.svg'
import closer from '../../assets/coverflow/closer.png'
import icon from '../../assets/games/games-icon.png'
import rIcon from '../../assets/logo192.png'
import song from '../../assets/songs/Closer.mp3'
import pic from '../../assets/coverflow/songicon/closer.jpg'
import play from '../../assets/play.svg'

function screen(props) {

    const { coverflow, music, games, settings, showmenu } = props;

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
                <div>
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
                            <img src={pic} alt=""></img>
                        </div>
                        <div className="description">
                            <div className="songName">
                                Closer
                             </div>
                            <div>Closer</div>
                            <div className="artist"> <span>Composed by</span>  Various Artist </div>
                        </div>
                    </div>

                    <div className="player">
                        <audio controls>
                            <source src={song}></source>
                        </audio>
                    </div>
                </div>


                {/* -------------------------------------------------------------------------- */}
                {/* games */}
                <div>

                </div>

                {/* settings */}
            </div>

        </div>
    )
}


export default screen;