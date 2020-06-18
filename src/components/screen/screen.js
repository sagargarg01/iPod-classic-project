import React from 'react';
import battery from '../../assets/battery.svg'
import arrowright from '../../assets/arrow_right.svg'
import CoverFlow from './list/coverflow';
import Music from './list/music';
import Games from './list/games';
import Settings from './list/settings';
import closer from '../../assets/coverflow/closer.png'
import icon from '../../assets/games/games-icon.png'
import rIcon from '../../assets/logo192.png'

function screen(props) {

    const { coverflow, music, games, settings, showmenu } = props;

    return (
        <div className="cont">
            <div className={`${showmenu ? "inside-screen" : "rm"}`} >
                <div className="menu-list">  {/* rm menu is left to be created */}

                    <div className="notification-panel">
                        <span className="noty-text">iPod.js</span>
                        <span className="battery">
                            <img src={battery} className="bat" />
                        </span>
                    </div>

                    <div className="list">
                        <div className={`${coverflow ? "active" : ''}`} id="coverflow">
                            CoverFlow
                       <span><img src={arrowright}></img></span></div>

                        <div className={`${music ? "active" : ''}`} id="music">
                            Music
                       <span><img src={arrowright}></img></span></div>

                        <div className={`${games ? "active" : ''}`} id="games">
                            Games
                       <span><img src={arrowright}></img></span></div>

                        <div className={`${settings ? "active" : ''}`} id="settings">
                            Settings
                       <span><img src={arrowright}></img></span></div>
                    </div>

                </div>

                <div>
                    <div className={`${coverflow || music ? "coverflow" : 'rm'}`} >
                        <img src={closer}></img>
                    </div>

                    <div className={`${games ? "games bg" : 'rm'}`} >
                        <img src={icon}></img>
                        <div>
                            games
                        </div>
                    </div>

                    <div className={`${settings ? "bg settings" : 'rm'}`} >
                        <img src={rIcon}></img>
                        <div>iPod.js</div>
                        <div className="name">by Sagar Garg</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default screen;