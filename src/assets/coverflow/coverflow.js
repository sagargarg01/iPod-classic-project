import closerImage from './closer.png'
import allweknowImage from './allweknow.jpeg'
import silenceImage from './silence.jpg'
import burnoutImage from './burnout.png'
import herewithmeImage from './herewithme.jpg'
import closer from '../songs/Closer.mp3'
import burnout from '../songs/burnout.mp3'
import allweknow from '../songs/allweknow.mp3'
import herewithme from '../songs/herewithme.mp3'
import silence from '../songs/silence.mp3'

const coverflow = [
   { name: "closer", images: closerImage, src: closer },
   { name: "Burn Out", images: burnoutImage, src: burnout },
   { name: "All We Know", images: allweknowImage, src: allweknow },
   { name: "Here With Me", images: herewithmeImage, src: herewithme },
   { name: "Silence", images: silenceImage, src: silence }
]

export default coverflow;