import '../styles/styles.css'
import ScrollManager from './modules/ScrollManager'
//import Slider from './modules/Slider'
import Multilingual from './modules/Multilingual'
import Menu from './modules/Menu'
import Sound from './modules/Sound'
import Cursor from './modules/Cursor'
import Cast from './modules/Cast'
import ImageGallery from './modules/ImageGallery'

const scroll = new ScrollManager()

new Cast()
new Multilingual()
new Menu()
new Sound()
new ImageGallery()
    //new Cursor()
    //new Slider('.slide', '#arrow-left', '#arrow-right')