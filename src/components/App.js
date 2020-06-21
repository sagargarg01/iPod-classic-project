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
      track: {
        name: "Closer",
        artist: "Various Artist",
        album: "Closer",
        artwork: pic,
        duration: 261,
        source: song
      },
      playingStatus: false,
      play: false,
      loading: true,

      coverflow: true,
      music: false,
      games: false,
      settings: false,

      musicmenu: false,
      albums: false,
      artist: true,

      showmenu: true
    };
  }



  // function to work rotate wheel
  zingarea = () => {
    var counter = 0;
    var counter2 = 0;
    const self = this;

    var containerElement = document.getElementById('container');
    var activeRegion = ZingTouch.Region(containerElement);
    var childElement = document.getElementById('object');

    activeRegion.bind(childElement, 'rotate', function (event) {
      //Perform Operations

      var angle = event.detail.distanceFromLast;

      if (self.state.showmenu === true && self.state.musicmenu === false) {
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

      if (self.state.musicmenu === true) {
        // *********************************************************
        // sub menu
        if (angle < 0) {
          // anticlockwise
          if (counter2 > 0 && counter2 <= 5) {
            self.setState({
              artist: true,
              albums: false
            })
          }
          else if (counter2 > 5 && counter2 <= 10) {
            self.setState({
              artist: false,
              albums: true
            })
          }

          if (counter2 < 0) { counter2 = 0 }
          else { counter2 = counter2 - 1; }
        }

        else if (angle > 0) {
          // clockwise
          if (counter2 >= 0 && counter2 < 5) {
            self.setState({
              artist: true,
              albums: false
            })
          }
          else if (counter2 >= 5 && counter2 < 10) {
            self.setState({
              artist: false,
              albums: true
            })
          }

          if (counter2 > 10) { counter2 = 10 }
          else { counter2 = counter2 + 1; }

        }
      }
    });
  }


  // function to play and pause the song
  playpause = () => {

    if (this.state.playingStatus === true) {
      if (this.state.play === true) {
        this.setState({
          play: false
        })
        this.togglePlay(false)
      }
      else {
        this.setState({
          play: true
        })
        this.togglePlay(true)
      }
    }
  }

  // helper function to play and pause audio 
  togglePlay = (status) => {

    let audio = document.getElementsByTagName("audio")[0];

    if (status === true) {
      audio.play();
      this.timer();
    }
    else {
      audio.pause();
      this.timer();
    }

  }


  // fills the music bar 
  setBar = () => {

    var bar = document.getElementById('fill');
    var width = parseInt(bar.getAttribute('width'));
    let self = this;
    var filled = setInterval(function () {

      // console.log(self.state.play)
      if (self.state.play === false || width === 100) {
        if (width === 100) {
          bar.setAttribute("width", 0)
        }
        clearInterval(filled)
      }
      else {
        width += 1;
        bar.style.width = `${width}%`
        bar.setAttribute("width", width)
      }

    }, 2600);
  }

  // -------------------------------------------------------------
  // music timer function
  timer = () => {
    this.setBar();
    var timer = document.getElementById('song_id');
    var timePlayed = parseInt(timer.getAttribute("data"));

    var self = this;
    var min = parseInt(timePlayed / 60);
    var sec = timePlayed % 60;

    var time = setInterval(function () {
      if (self.state.play === false || timePlayed === self.state.track.duration) {

        if (timePlayed === self.state.track.duration) {
          timer.setAttribute("data", 0);
          self.setState({
            play: false,
            playingStatus: false
          })
        }
        clearInterval(time)
      }
      else {
        sec++;
        timePlayed++;

        if (sec > 59) { min++; sec = 0 }
        if (sec <= 9) { sec = `0${sec}` }

        timer.innerText = `${min}:${sec}`;
        timer.setAttribute("data", timePlayed);
      }

    }, 1000);
  }

  // center button function
  onClick = () => {
    if (this.state.music === true && this.state.musicmenu === false) {
      this.setState({
        musicmenu: true
      })
    }
    else {
      this.setState({
        showmenu: false
      })

      if (this.state.playingStatus === false) {

        if (this.state.coverflow || this.state.music) {
          this.setState({
            playingStatus: true,
            play: true
          })

          this.togglePlay(true)
        }
      }
    }
  }


  // function to show and hide side menu
  showmenu = () => {
    if (this.state.musicmenu === true && this.state.showmenu === true) {
      this.setState({
        musicmenu: false
      })
    }
    else {
      this.setState({
        showmenu: true
      })
    }
  }

  render() {
    const { coverflow, music, games, settings, showmenu, track, playingStatus, play, musicmenu, artist, albums } = this.state;
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
                play={play}
                musicmenu={musicmenu}
                artist={artist}
                albums={albums}
              />
            </div>

            <div className="buttons-container" id="container">

              <div className="buttons" id="object" onMouseOver={this.zingarea}>
                <div className="inner-disk" onClick={this.onClick}></div>

                <img src={menu} className="menu" onClick={this.showmenu} alt="" />
                <img src={play_pause} className="play_pause" alt="" onClick={this.playpause} />
                <img src={fastforward} className="fastforward" alt="" />
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



