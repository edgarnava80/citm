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
    }

    getCurrentTop() {
        return (this.scrolledVertically / this.browserHeight).toFixed(2)
    }

    runOnScroll() {
        this.defineScrollDirection()
            //Methods to execute on scroll defined for each particular website
        if (this.getCurrentTop() < 1) this.actionsP1()
        if (this.getCurrentTop() > .1 && this.getCurrentTop() < 2) this.actionsP2()
            //if (this.getCurrentTop() > 1.1 && this.getCurrentTop() < 2) this.actionsP3()
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
            const mainTitleP2 = document.querySelector('.site-main__title-1__text')
            const mainImageP2 = document.querySelector('.site-main__scene-1')
            if (this.getCurrentTop() < 1) {
                mainTitleP2.style.transform = 'translate(0px,' + this.scrolledVertically / -2 + 'px)'
                mainImageP2.style.transform = 'translate(0px,' + this.scrolledVertically / -4 + 'px)'
            }
            /*if (this.getCurrentTop() > 1) {
                mainTitleP2.style.transform = 'translate(0px,' + ((this.scrolledVertically / -2) + (this.scrolledVertically - this.browserHeight)) + 'px)'
                mainImageP2.style.transform = 'translate(0px,' + ((this.scrolledVertically / -4) + (this.scrolledVertically - this.browserHeight) / 2) + 'px)'
            }
            if (this.getCurrentTop() > 1.5) {
                mainTitleP2.style.opacity = 2.25 + (this.scrolledVertically - this.browserHeight) / -400
                mainImageP2.style.opacity = 2.25 + (this.scrolledVertically - this.browserHeight) / -400
            }*/
        }
        // Method to trigger the actions on page 3
    actionsP3() {
        console.log('Transform' + (this.scrolledVertically / -2))
        const mainTitleP3 = document.querySelector('.site-main__title-2__text')
        const mainImageP3 = document.querySelector('.site-main__scene-2')
        if (this.getCurrentTop() < 2) {
            mainTitleP3.style.transform = 'translate(0px,' + this.scrolledVertically / -2 + 'px)'
            mainImageP3.style.transform = 'translate(0px,' + this.scrolledVertically / -4 + 'px)'
        }
    }
}

export default ScrollManager