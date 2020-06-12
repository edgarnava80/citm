import '../styles/styles.css'
import ScrollManager from './modules/ScrollManager'
import Slider from './modules/Slider'
import Menu from './modules/Menu'
import Sound from './modules/Sound'
import RevealOnScroll from './modules/RevealOnScroll'
import Cursor from './modules/Cursor'

const scroll = new ScrollManager()

new Menu()
new Sound()
new Cursor()
new Slider('.slide', '#arrow-left', '#arrow-right')



/*
let browserHeight = window.innerHeight
let title = document.querySelector('.site-home__title')
let subtitle = document.querySelector('.site-home__subtitle')
let sceneOneTitle = document.querySelector('.site-main__title__text')

window.addEventListener("scroll", () => {
    let fromTop = window.pageYOffset
    let scrolledLevel = fromTop / browserHeight
    subtitle.style.opacity = (1 - fromTop / 1000 * 3).toFixed(2)
    subtitle.style.transform = 'translate(0px,' + fromTop / 2 + 'px)'
    title.style.transform = 'translate(0px,' + fromTop / 1.6 + 'px)'
    if (scrolledLevel > .1 && scrolledLevel < 1) {
        sceneOneTitle.style.transform = 'translate(0px,' + fromTop / -3 + 'px)'
    } else if (scrolledLevel > 1 && scrolledLevel < 2.1) {
        if (scrolledLevel < 1.5) {
            sceneOneTitle.style.transform = 'translate(0px,' + ((fromTop / -3) + (fromTop - browserHeight)) + 'px)'
        } else if (scrolledLevel > 1.5 && scrolledLevel < 2) {
            console.log('Opacity ' + (2 - scrolledLevel * 1.3))
            sceneOneTitle.style.opacity = 2 - scrolledLevel * 1.3
        }
    }
})
*/