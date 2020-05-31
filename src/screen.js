import React from 'react';
import './screen.css'
import battery from './assets/battery.svg'

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
                   <div>Cover Flow</div>
                   <div>Music</div>
                   <div>Games</div>
                   <div>Settings</div>
                </div>

            </div>

        </div>
    )
}


export default screen;