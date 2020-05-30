import '../styles/styles.css'
import Slider from './modules/Slider'
import RevealOnScroll from './modules/RevealOnScroll'
//import ActionOnScroll from './modules/ActionOnScroll'

new RevealOnScroll(document.querySelectorAll(".site-main__film"), 95)
new RevealOnScroll(document.querySelectorAll(".site-cast--melanie"), 95)
new RevealOnScroll(document.querySelectorAll(".site-cast--mario"), 95)
new RevealOnScroll(document.querySelectorAll(".site-cast--rouse"), 95)
new Slider('.slide', '#arrow-left', '#arrow-right')

let browserHeight = window.innerHeight
let title = document.querySelector('.site-home__title')
let subtitle = document.querySelector('.site-home__subtitle')

window.addEventListener("scroll", () => {
    let fromTop = window.pageYOffset
    subtitle.style.opacity = (1 - fromTop / 1000 * 3).toFixed(2)
    subtitle.style.transform = 'translate(0px,' + fromTop / 2 + 'px)'
    title.style.transform = 'translate(0px,' + fromTop / 1.6 + 'px)'
})