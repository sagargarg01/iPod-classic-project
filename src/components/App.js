import React from 'react';
import menu from '../assets/menu.svg'
import fastforward from '../assets/fast_forward.svg'
import play_pause from '../assets/play_pause.svg'
import rewind from '../assets/rewind.svg'
import Screen from './screen/screen.js'
import ZingTouch from 'zingtouch';
import settings from './screen/list/settings';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      items : [],
      loading: true,

      coverflow:true,
      music: false,
      games: false,
      settings: false,

      showmenu: true
    };
  }

// function to work rotate wheel
zingarea = () => {

  var counter = 0;
  const self = this;

  var containerElement = document.getElementById('container');
  var activeRegion = ZingTouch.Region(containerElement);
  var childElement = document.getElementById('object');

  activeRegion.bind(childElement, 'rotate', function (event) {
    //Perform Operations

    var angle = event.detail.distanceFromLast;

    // //still not a good approach :(
    if (angle < 0) {
      // anticlockwise
      if(counter > 0 && counter <= 5){
        self.setState({
          coverflow:true,
          music: false,
          games: false,
          settings: false
        })
      }
      else if(counter > 5 && counter <= 10){
        self.setState({
          coverflow:false,
          music: true,
          games: false,
          settings: false
        })
      }
      else if(counter > 10 && counter <= 15){
        self.setState({
          coverflow:false,
          music: false,
          games: true,
          settings: false
        })
      }
      else if(counter > 15 && counter <= 20){
        self.setState({
          coverflow:false,
          music: false,
          games: false,
          settings: true
        })
      }

      if(counter < 0){counter=0}
      else{counter = counter - 1;}

    }

    else if (angle > 0) {
      //clockwise
      if(counter >= 0 && counter < 5){
        self.setState({
          coverflow:true,
          music: false,
          games: false,
          settings: false
        })
      }
      else if(counter >= 5 && counter < 10){
        self.setState({
          coverflow:false,
          music: true,
          games: false,
          settings: false
        })
      }
      else if(counter >= 10 && counter < 15){
        self.setState({
          coverflow:false,
          music: false,
          games: true,
          settings: false
        })
      }
      else if(counter >= 15 && counter < 20){
        self.setState({
          coverflow:false,
          music: false,
          games: false,
          settings: true
        })
      }

      if(counter > 20){counter=20}
      else{ counter = counter + 1;}

     }

  });

}

  render() {
  const  { coverflow , music , games , settings , showmenu } = this.state;
  console.log(this.state)
    return (
      <div className="App">
        <div className="layout">
          <div className="body">

            <div className="screen">
              <Screen
               showmenu={showmenu}
               coverflow={coverflow} 
               music={music}
               games={games}
               settings={settings}
               />
            </div>

            <div className="buttons-container" id="container">

              <div className="buttons" id="object" onMouseOver={this.zingarea}>
                <div className="inner-disk" ></div>

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

  
}



export default App;



