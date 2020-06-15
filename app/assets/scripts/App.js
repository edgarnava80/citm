import '../styles/styles.css'
import ScrollManager from './modules/ScrollManager'
//import Slider from './modules/Slider'
import Menu from './modules/Menu'
import Sound from './modules/Sound'
import Cursor from './modules/Cursor'

const scroll = new ScrollManager()

new Menu()
new Sound()
    //new Cursor()
imageGalleryH()
imageGalleryV()
    //new Slider('.slide', '#arrow-left', '#arrow-right')
function imageGalleryH() {
    const highlight = document.querySelector('.gallery-highlight')
    const previews = document.querySelectorAll('.image-preview img')
    previews.forEach(preview => {
        preview.addEventListener('click', function() {
            const smallSrc = this.src
            const bigSrc = smallSrc.replace('small', 'big')
            highlight.src = bigSrc
            previews.forEach(el => el.classList.remove("image-active"))
            preview.classList.add("image-active")
        })
    })
}

function imageGalleryV() {
    const highlight = document.querySelector('.vertical-highlight')
    const previews = document.querySelectorAll('.vertical-preview img')
    previews.forEach(preview => {
        preview.addEventListener('click', function() {
            const smallSrc = this.src
            const bigSrc = smallSrc.replace('small', 'big')
            highlight.src = bigSrc
            previews.forEach(el => el.classList.remove("vertical-active"))
            preview.classList.add("vertical-active")
        })
    })
}