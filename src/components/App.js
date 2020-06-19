import React from 'react';
import menu from '../assets/menu.svg'
import fastforward from '../assets/fast_forward.svg'
import play_pause from '../assets/play_pause.svg'
import rewind from '../assets/rewind.svg'
import Screen from './screen/screen.js'
import ZingTouch from 'zingtouch';
import song from '../assets/songs/Closer.mp3'
import pic from '../assets/coverflow/songicon/closer.jpg'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      track : {
        name: "Closer",
        artist: "Various Artist",
        album: "Closer",
        artwork: pic,
        duration: 261,
        source: song
      },
      playingStatus: false,
      loading: true,

      coverflow: true,
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

      if (self.state.showmenu === true) {
        // //still not a good approach :(
        if (angle < 0) {
          // anticlockwise
          if (counter > 0 && counter <= 5) {
            self.setState({
              coverflow: true,
              music: false,
              games: false,
              settings: false
            })
          }
          else if (counter > 5 && counter <= 10) {
            self.setState({
              coverflow: false,
              music: true,
              games: false,
              settings: false
            })
          }
          else if (counter > 10 && counter <= 15) {
            self.setState({
              coverflow: false,
              music: false,
              games: true,
              settings: false
            })
          }
          else if (counter > 15 && counter <= 20) {
            self.setState({
              coverflow: false,
              music: false,
              games: false,
              settings: true
            })
          }

          if (counter < 0) { counter = 0 }
          else { counter = counter - 1; }

        }

        else if (angle > 0) {
          //clockwise
          if (counter >= 0 && counter < 5) {
            self.setState({
              coverflow: true,
              music: false,
              games: false,
              settings: false
            })
          }
          else if (counter >= 5 && counter < 10) {
            self.setState({
              coverflow: false,
              music: true,
              games: false,
              settings: false
            })
          }
          else if (counter >= 10 && counter < 15) {
            self.setState({
              coverflow: false,
              music: false,
              games: true,
              settings: false
            })
          }
          else if (counter >= 15 && counter < 20) {
            self.setState({
              coverflow: false,
              music: false,
              games: false,
              settings: true
            })
          }

          if (counter > 20) { counter = 20 }
          else { counter = counter + 1; }

        }
      }
    });
  }
  
  togglePlay = (status) => {

    let audio =  document.getElementsByTagName("audio")[0];

    if(status === true){
      audio.play();
      this.timer(true);
    }
    else{
      audio.pause();
      this.timer(false);
    }

  }

  // -------------------------------------------------------------
  // not correct , shit 
  timer = (status) => {
    let timer = document.getElementById("song_id");
    console.log('i am here', timer)

    let current = parseInt(timer.innerText);
    console.log('i am here', current)
    let totalTime = this.state.track.duration;
    let min = current/60;
    let sec = current%60;

   let time =  setInterval(function(){
      if(current === totalTime){clearInterval(time);}

      current++;
      sec++;

      if(sec>59){ sec = 0; min++;}

      let truesec = sec;
      if(sec<=9){truesec=`0${sec}`;}
      timer.innerText = `${min}:${truesec}`;
    },1000);
  
  }

  onClick = () => {
    this.setState({
      showmenu: false
    })

    if(this.state.coverflow || this.state.music){
      this.setState({
        playingStatus: true
      })

      this.togglePlay(true)
    }
  }

  showmenu = () => {
    console.log("showmneu")
    this.setState({
      showmenu: true
    })
  }

  render() {
    const { coverflow, music, games, settings, showmenu, track, playingStatus } = this.state;
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
                track={track}
                playingStatus={playingStatus}
              />
            </div>

            <div className="buttons-container" id="container">

              <div className="buttons" id="object" onMouseOver={this.zingarea}>
                <div className="inner-disk" onClick={this.onClick}></div>

                <img src={menu} className="menu" onClick={this.showmenu} alt="" />
                <img src={play_pause} className="play_pause" alt="" />
                <img src={fastforward} className="fastforward" alt=""/>
                <img src={rewind} className="rewind" alt="" />

              </div>

            </div>
          </div>
        </div>
      </div>

    );
  }
}



export default App;



