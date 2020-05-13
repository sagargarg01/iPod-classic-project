import React from 'react';
import './App.css';
import menu from './assets/menu.svg'
import fastforward from './assets/fast_forward.svg'
import play_pause from './assets/play_pause.svg'
import rewind from './assets/rewind.svg'

function App() {
  return (
    <div className="App">
      <div className="layout">
        <div className="body">

        <div className="screen">

        </div>

        <div className="buttons-container">
          <div className="buttons"> 
          <div className="inner-disk">

          </div>
          <img src = {menu} className="menu"/>
            <img src = {play_pause} className="play_pause"/>
            <img src = {fastforward} className="fastforward"/>
            <img src = {rewind} className="rewind"/>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}

export default App;
