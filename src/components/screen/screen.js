import React from 'react';
import battery from '../../assets/battery.svg'
import arrowright from '../../assets/arrow_right.svg'
import CoverFlow from './list/coverflow';
import Music from './list/music';
import Games from './list/games';
import Settings from './list/settings';


function screen(props) {

    const  { coverflow , music , games , settings , showmenu } = props;

    return (
        <div className="inside-screen" >
            <div className={`${showmenu ? "menu-list": "rm-menu"}`}>  {/* rm menu is left to be created */}

                <div className="notification-panel">
                  <span className="noty-text">iPod.js</span>
                  <span className="battery">
                      <img src={battery} className="bat"/>
                  </span>
                </div>

                <div className="list">
                   <div className={`${coverflow ? "active": ''}`} id="coverflow">
                       Cover Flow
                       <span><img src={arrowright}></img></span></div>

                   <div className={`${music ? "active": ''}`} id="music">
                       Music 
                       <span><img src={arrowright}></img></span></div>

                   <div className={`${games ? "active": ''}`} id="games">
                       Games 
                       <span><img src={arrowright}></img></span></div>

                   <div className={`${settings ? "active": ''}`} id="settings">
                       Settings 
                       <span><img src={arrowright}></img></span></div>
                </div>

            </div>
        </div>
    )
}


export default screen;