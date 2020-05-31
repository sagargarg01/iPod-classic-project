import React from 'react';
import './screen.css'
import battery from './assets/battery.svg'
import arrowright from './assets/arrow_right.svg'

function screen() {

    console.log('enterung')

    return (
        <div className="inside-screen" >

            <div className="menu-list">

                <div className="notification-panel">
                  <span className="noty-text">iPod.js</span>
                  <span className="battery">
                      <img src={battery} className="bat"s/>
                  </span>
                </div>

                <div className="list">
                   <div className="active" id="coverflow">Cover Flow <span><img src={arrowright}></img></span></div>
                   <div className="" id="music">Music <span><img src={arrowright}></img></span></div>
                   <div className="" id="games">Games <span><img src={arrowright}></img></span></div>
                   <div className="" id="settings">Settings <span><img src={arrowright}></img></span></div>
                </div>

            </div>

        </div>
    )
}


export default screen;