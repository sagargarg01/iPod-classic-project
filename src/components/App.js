import React from 'react';
import assets from '../assets/assets'
import coverflow from '../assets/coverflow/coverflow'
import Screen from './screen/screen.js'
import ZingTouch from 'zingtouch';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      playingStatus: false,
      play: false,
      loading: true,
      mainMenu: "coverflow",

      musicmenu: false,
      musicMenuName: "artist",

      showSongs: false,
      playingSongId: 0,
      activeSongId: 0,

      showmenu: true
    };
  }

  // function to work rotate wheel
  zingarea = () => {
    var counter = 0;
    var counter2 = 0;
    var c3 = 0;

    const self = this;

    var containerElement = document.getElementById('container');
    var activeRegion = ZingTouch.Region(containerElement);
    var childElement = document.getElementById('object');
    var volumeController = document.getElementsByClassName('volumeController')[0];
    let audio = document.getElementsByClassName('audio')[0];
    var vol = audio.volume;

    activeRegion.bind(childElement, 'rotate', function (event) {
      //Perform Operations

      var angle = event.detail.distanceFromLast;

      if (self.state.showmenu && self.state.musicmenu === false) {
        if (angle < 0) {
          // anticlockwise
          if (counter > 0 && counter <= 5) {
            self.setState({
              mainMenu: "coverflow"
            })
          }
          else if (counter > 5 && counter <= 10) {
            self.setState({
              mainMenu: "music"
            })
          }
          else if (counter > 10 && counter <= 15) {
            self.setState({
              mainMenu: "games"
            })
          }
          else if (counter > 15 && counter <= 20) {
            self.setState({
              mainMenu: "settings"
            })
          }

          if (counter < 0) { counter = 0 }
          else { counter = counter - 1; }

        }

        else if (angle > 0) {
          //clockwise
          if (counter >= 0 && counter < 5) {
            self.setState({
              mainMenu: "coverflow"
            })
          }
          else if (counter >= 5 && counter < 10) {
            self.setState({
              mainMenu: "music"
            })
          }
          else if (counter >= 10 && counter < 15) {
            self.setState({
              mainMenu: "games"
            })
          }
          else if (counter >= 15 && counter < 20) {
            self.setState({
              mainMenu: "settings"
            })
          }

          if (counter > 20) { counter = 20 }
          else { counter = counter + 1; }

        }
      }

      else if (self.state.musicmenu && self.state.showSongs === false) {
        // *********************************************************
        // sub menu
        if (angle < 0) {
          // anticlockwise
          if (counter2 > 0 && counter2 <= 5) {
            self.setState({
              musicMenuName: "artist"
            })
          }
          else if (counter2 > 5 && counter2 <= 10) {
            self.setState({
              musicMenuName: "albums"
            })
          }

          if (counter2 === 0) { counter2 = 0 }
          else { counter2 = counter2 - 1; }
        }

        else if (angle > 0) {
          // clockwise
          if (counter2 >= 0 && counter2 < 5) {
            self.setState({
              musicMenuName: "artist"
            })
          }
          else if (counter2 >= 5 && counter2 < 10) {
            self.setState({
              musicMenuName: "albums"
            })
          }

          if (counter2 === 10) { counter2 = 10 }
          else { counter2 = counter2 + 1; }
        }
      }

      else if (self.state.showSongs && self.state.showmenu) {
        if (angle < 0) {
          if (10 * self.state.activeSongId > c3) {
            self.setState(prevState => ({
              activeSongId: prevState.activeSongId - 1
            }))
          }

          c3 = (c3 === 0) ? 0 : c3 - 1;
        }

        else if (angle > 0) {
          // clockwise
          if (10 * self.state.activeSongId < c3) {
            self.setState(prevState => ({
              activeSongId: prevState.activeSongId + 1
            }))
          }

          c3 = (c3 === 10 * (coverflow.length - 1)) ? 10 * (coverflow.length - 1) : c3 + 1;
        }
      }

      // volume controllers
      else if (self.state.showmenu === false && self.state.playingStatus === true) {
        if (angle < 0) {
          // anticlock wise
          // dec volume
          if (vol > 0.01 && vol <= 1) {
            vol = vol - 0.01;
            audio.volume = vol;
          }
        }

        else if (angle > 0) {
          // clockwise
          // inc volume
          if (vol >= 0 && vol < 0.99) {
            vol = vol + 0.01;
            audio.volume = vol;
          }
        }
        volumeController.innerHTML = `
        <div> <img src = 
          ${parseInt(audio.volume * 100) < 45 ? assets.lowVolume : assets.volume} />
         </div>
        <div className = "volume">${parseInt(audio.volume * 100)}</div>`

        setTimeout(() => {
          volumeController.innerHTML = ''
        }, 3500)
      }
    });
  }

  // function to play and pause the song
  playpause = () => {
    let audio = document.getElementsByClassName('audio')[0];

    if (this.state.playingStatus === true) {
      if (this.state.play === true) {
        this.setState({
          play: false
        })
        audio.pause();
      }
      else {
        this.setState({
          play: true
        })
        audio.play();
      }
    }
  }

  startMusic = () => {
    this.setState(prevState => ({
      playingSongId: prevState.activeSongId,
      playingStatus: true,
      play: true
    }));
  }

  stopMusic = () => {
    this.setState({
      playingSongId: 0,
      playingStatus: false,
      play: false
    });
  }

  changeMusic = () => {
    this.setState({ play: false });
    this.startMusic();
  }


  // center button function
  onClick = () => {
    if (this.state.mainMenu === "music" && this.state.musicmenu === false) {
      this.setState({
        musicmenu: true
      })
    }
    else if (this.state.musicmenu === true && this.state.showSongs === false) {
      this.setState({
        showSongs: true
      })
    }
    else {
      this.setState({
        showmenu: false
      })

      if (this.state.showSongs) {
        if (this.state.playingStatus && this.state.playingSongId !== this.state.activeSongId) this.changeMusic();
        else this.startMusic();
      }
    }
  }

  // function to show and hide side menu
  showmenu = () => {
    if (this.state.showmenu === false) {
      this.setState({
        showmenu: true
      })
    }
    else if (this.state.showSongs) {
      this.setState({
        showSongs: false
      })
    }
    else if (this.state.musicmenu === true) {
      this.setState({
        musicmenu: false
      })
    }
  }

  render() {
    const { mainMenu, showmenu, playingStatus, play, musicmenu, musicMenuName, showSongs, activeSongId, playingSongId } = this.state;
    return (
      <div className="App">
        <div className="layout">
          <div className="body">

            <div className="screen">
              <Screen
                mainMenu={mainMenu}
                showmenu={showmenu}
                playingStatus={playingStatus}
                play={play}
                musicmenu={musicmenu}
                musicMenuName={musicMenuName}
                showSongs={showSongs}
                activeSongId={activeSongId}
                playingSongId={playingSongId}
              />
            </div>

            <div className="buttons-container" id="container">

              <div className="buttons" id="object" onMouseOver={this.zingarea}>
                <div className="inner-disk" onClick={this.onClick}></div>

                <img src={assets.menu} className="menu" onClick={this.showmenu} alt="" />
                <img src={assets.play_pause} className="play_pause" alt="" onClick={this.playpause} />
                <img src={assets.fastforward} className="fastforward" alt="" />
                <img src={assets.rewind} className="rewind" alt="" />

              </div>

            </div>
          </div>
        </div>
      </div>

    );
  }
}


export default App;



