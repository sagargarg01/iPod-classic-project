import closerImage from './closer.png'
import allweknowImage from './allweknow.jpeg'
import silenceImage from './silence.jpg'
import burnoutImage from './burnout.png'
import herewithmeImage from './herewithme.jpg'
import wolvesImage from './wolves.jpg';
import closerSong from '../songs/CloserSong.mp3'
import burnoutSong from '../songs/burnoutSong.mp3'
import allweknowSong from '../songs/allweknowSong.mp3'
import herewithmeSong from '../songs/herewithmeSong.mp3'
import silenceSong from '../songs/silenceSong.mp3'
import wolvesSong from '../songs/wolves.mp3'

const coverflow = [
   { _id: 0, name: "Closer", images: closerImage, src: closerSong, artist: "Various Artist", album: "Closer" },
   { _id: 1, name: "Burn Out", images: burnoutImage, src: burnoutSong, artist: "Various Artist", album: "Burn Out" },
   { _id: 2, name: "All We Know", images: allweknowImage, src: allweknowSong, artist: "Various Artist", album: "All We Know" },
   { _id: 3, name: "Here With Me", images: herewithmeImage, src: herewithmeSong, artist: "Various Artist", album: "Here With Me" },
   { _id: 4, name: "Silence", images: silenceImage, src: silenceSong, artist: "Various Artist", album: "Silence" },
   { _id: 5, name: "Wolves", images: wolvesImage, src: wolvesSong, artist: "Various Artist", album: "Wolves" }
]

export default coverflow;