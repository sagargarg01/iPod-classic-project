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
          <Sc/>
        </div>

        <div className="buttons-container" id='container'>

          <div className="buttons" id='object'> 
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


var containerElement = document.getElementById('container');
var activeRegion = ZingTouch.Region(containerElement);

var childElement = document.getElementById('object');
activeRegion.bind(childElement, 'pan', function(event){
  //Perform Operations
  console.log('working')
});

export default App;


