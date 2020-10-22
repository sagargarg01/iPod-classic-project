import closerImage from './closer.png'
import allweknowImage from './allweknow.jpeg'
import silenceImage from './silence.jpg'
import burnoutImage from './burnout.png'
import herewithmeImage from './herewithme.jpg'
import closerSong from '../songs/CloserSong.mp3'
import burnoutSong from '../songs/burnoutSong.mp3'
import allweknowSong from '../songs/allweknowSong.mp3'
import herewithmeSong from '../songs/herewithmeSong.mp3'
import silenceSong from '../songs/silenceSong.mp3'

const coverflow = [
   { _id: 0, name: "Closer", images: closerImage, src: closerSong, duration: 261, artist: "Variopus Artist", album: "Closer" },
   { _id: 1, name: "Burn Out", images: burnoutImage, src: burnoutSong, duration: 261, artist: "Variopus Artist", album: "Burn Out" },
   { _id: 2, name: "All We Know", images: allweknowImage, src: allweknowSong, duration: 261, artist: "Variopus Artist", album: "All We Know" },
   { _id: 3, name: "Here With Me", images: herewithmeImage, src: herewithmeSong, duration: 261, artist: "Variopus Artist", album: "Here With Me" },
   { _id: 4, name: "Silence", images: silenceImage, src: silenceSong, duration: 261, artist: "Variopus Artist", album: "Silence" }
]

export default coverflow;