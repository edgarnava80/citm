import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class ScrollManager {
    constructor() {
            // GLOBAL CONSTRUCTOR
            this.browserHeight = window.innerHeight
            this.browserWidth = window.innerWidth
            this.scrolledVertically = window.pageYOffset
            this.events()
                // PARAMETERS DEFINED FOR EACH PARTICULAR WEBSITE

        }
        // GLOBAL METHODS
    events() {
        window.addEventListener("scroll", throttle(() => this.runOnScroll(), 10))
        window.addEventListener("resize", debounce(() => {
            this.browserHeight = window.innerHeight
            this.browserWidth = window.innerWidth
        }, 333))
        this.videoEvents()
    }

    getCurrentTop() {
        return (this.scrolledVertically / this.browserHeight).toFixed(2)
    }

    runOnScroll() {
        this.defineScrollDirection()
            //Methods to execute on scroll defined for each particular website
        if (this.getCurrentTop() < 1) this.actionsP1()
        this.actionsP2()
        this.actionsP3()
        this.actionsP4()
        if (this.scrollDirection === 'down' && this.getCurrentTop() > 4.2 && this.getCurrentTop() < 5.3 || this.scrollDirection === 'up' && this.getCurrentTop() > 3 && this.getCurrentTop() < 5.5) this.actionsP5()
    }

    defineScrollDirection() {
            if (window.pageYOffset > this.scrolledVertically) {
                this.scrollDirection = 'down'
            } else {
                this.scrollDirection = 'up'
            }
            this.scrolledVertically = window.pageYOffset
        }
        //METHODS DEFINED FOR EACH PARTICULAR WEBSITE
        // Method to trigger the actions on page 1
    videoEvents() {
        const container = document.querySelector('.site-home__video')
        const audioFile = document.querySelector('.sound__audio')
        const audioIcon = document.querySelector('.sound__icon')
        container.onmouseenter = () => {
            console.log('mouse enter')
                //container.style.width = '85%'
            container.classList.remove('resize-small')
            container.classList.add('resize-big')
            audioFile.muted = true
            audioIcon.classList.remove('fa-volume-up')
            audioIcon.classList.add('fa-volume-off')
        }
        container.onmouseleave = () => {
            container.classList.remove('resize-big')
            container.classList.add('resize-small')
        }
    }
    actionsP1() {
            const mainTitleP1 = document.querySelector('.site-home__title')
            const mainSubtitleP1 = document.querySelector('.site-home__subtitle')

            mainTitleP1.style.opacity = (1 - this.scrolledVertically / 1000 * 1.5).toFixed(2)
            mainSubtitleP1.style.opacity = (1 - this.scrolledVertically / 1000 * 1.7).toFixed(2)
            mainSubtitleP1.style.transform = 'translate(0px,' + this.scrolledVertically / 2.5 + 'px)'
            mainTitleP1.style.transform = 'translate(0px,' + this.scrolledVertically / 1.8 + 'px)'
        }
        // Method to trigger the actions on page 2
    actionsP2() {
            const mainTitleP2 = document.querySelector('.site-main__title-1')
            const mainImageP2 = document.querySelector('.site-main__scene-1')

            if (this.getCurrentTop() > .9 || this.getCurrentTop() < 1) {
                mainImageP2.classList.add('rightLeft')
                mainTitleP2.classList.add('leftRight')
            }
            if (this.getCurrentTop() > 2 || this.getCurrentTop() < .2) {
                mainImageP2.classList.remove('rightLeft')
                mainTitleP2.classList.remove('leftRight')
            }
        }
        // Method to trigger the actions on page 3
    actionsP3() {
        const mainTitleP3 = document.querySelector('.site-main__title-2')
        const mainImageP3 = document.querySelector('.site-main__scene-2')
        if (this.getCurrentTop() > 1.9 || this.getCurrentTop() < 2) {
            mainImageP3.classList.add('leftRight')
            mainTitleP3.classList.add('rightLeft')
        }
        if (this.getCurrentTop() > 3 || this.getCurrentTop() < 1.2) {
            mainImageP3.classList.remove('leftRight')
            mainTitleP3.classList.remove('rightLeft')
        }
    }
    actionsP4() {
            //console.log('CurrentTop: ' + this.getCurrentTop())
            const mainTitleP4 = document.querySelector('.site-main__synopsis__title')
            const mainSubtitleP4 = document.querySelector('.site-main__synopsis__text')
            if (this.getCurrentTop() > 3) {
                mainTitleP4.classList.add('fadeIn')
                mainSubtitleP4.classList.add('fadeIn')
            }
            if (this.getCurrentTop() < 2) {
                mainTitleP4.classList.remove('fadeIn')
                mainSubtitleP4.classList.remove('fadeIn')
            }
        }
        // Method to trigger the actions on page 5
    actionsP5() {
        const details = document.querySelectorAll('.site-main__film__text')
        const validator = document.querySelectorAll('.is-showing')
        if (this.scrollDirection === 'down' && this.getCurrentTop() == 4.25 || this.scrollDirection === 'up' && this.getCurrentTop() == 4.50) {
            console.log(validator.length + ' scroll dir: ' + this.scrollDirection)
            for (let i = 0; i < details.length; i++) {
                setTimeout(() => {
                    details[i].classList.add('is-showing')
                }, 100 * (i + 1))
            }
        }
        if (this.scrollDirection === 'down' && this.getCurrentTop() == 5.20 || this.scrollDirection === 'up' && this.getCurrentTop() == 3.50) {
            details.forEach(el => {
                el.classList.remove('is-showing')
            })
        }
    }
    blinkArrow() {
        const arrowDown = document.querySelector('.site-home__arrow-btn')
        arrowDown.classList.toggle('blinkArrows')
    }
}

export default ScrollManager