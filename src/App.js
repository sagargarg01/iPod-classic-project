import React from 'react';
import './App.css';
import menu from './assets/menu.svg'
import fastforward from './assets/fast_forward.svg'
import play_pause from './assets/play_pause.svg'
import rewind from './assets/rewind.svg'
import Sc from './screen.js'
import ZingTouch from 'zingtouch';

function App() {

  return (
    <div className="App">
      <div className="layout">
        <div className="body">

          <div className="screen">
            <Sc />
          </div>

          <div className="buttons-container" id="container">

            <div className="buttons" id="object" onMouseOver={() => zingarea()}>
              <div className="inner-disk">

              </div>
              <img src={menu} className="menu" />
              <img src={play_pause} className="play_pause" />
              <img src={fastforward} className="fastforward" />
              <img src={rewind} className="rewind" />
            </div>

          </div>

        </div>
      </div>

    </div>

  );

}

function zingarea() {

  var counter = 0;
  var containerElement = document.getElementById('container');
  var activeRegion = ZingTouch.Region(containerElement);

  var childElement = document.getElementById('object');
  activeRegion.bind(childElement, 'rotate', function (event) {
    //Perform Operations

    // var newAngle =  event.detail.distanceFromOrigin - event.detail.angle ;
    var angle = event.detail.distanceFromLast;
    var coverflow = document.getElementById('coverflow');
    var music = document.getElementById('music');
    var games = document.getElementById('games');
    var settings = document.getElementById('settings');
   

    if (angle < 0) {
      console.log('anticlock');
      if(counter === 0){music.classList.remove("active");coverflow.classList.add("active");}
      else if(counter === 5){games.classList.remove("active");music.classList.add("active")}
      else if(counter === 10){settings.classList.remove("active");games.classList.add("active")}
      else if(counter === 15){settings.classList.add("active")}
      counter = counter - 1;
    }
    else if (angle > 0) {
      console.log('clock');
      if(counter === 0){coverflow.classList.add("active")}
      else if(counter === 5){coverflow.classList.remove("active");music.classList.add("active")}
      else if(counter === 10){music.classList.remove("active");games.classList.add("active")}
      else if(counter === 15){games.classList.remove("active");settings.classList.add("active")}
      counter = counter + 1;
    }
  });

}


export default App;


