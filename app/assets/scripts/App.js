import '../styles/styles.css'
import Menu from './modules/Menu'
import RevealOnScroll from './modules/RevealOnScroll'

new RevealOnScroll(document.querySelectorAll(".site-main__white"), 70)
new RevealOnScroll(document.querySelectorAll(".site-main__black"), 50)

let appMenu = new Menu();