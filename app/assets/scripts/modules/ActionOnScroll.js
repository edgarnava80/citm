import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class ActionOnScroll {
    constructor(els, type, level) {
        this.itemsToAction = document.querySelector(els)
        this.typeOfAction = type
        this.levelOfAction = level
        console.log("Element: " + this.itemsToAction)
        console.log("Action: " + this.typeOfAction)
        console.log("Level: " + this.levelOfAction)
            //this.thresholdPercent = pct
        this.browserHeight = window.innerHeight
        this.awayFromTop = window.pageYOffset
        this.scrollPosition = this.awayFromTop / this.browserHeight
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)
        this.events()
    }

    events() {
        window.addEventListener("scroll", this.scrollThrottle)
            // Update properties when page resized
            /*window.addEventListener("resize", debounce(() => {
                this.browserHeight = window.innerHeight
                this.awayFromTop = window.pageYOffset
                this.scrollPosition = this.awayFromTop / this.browserHeight
                console.log(`Page resized, new height: ${this.browserHeight} and away from top: ${this.awayFromTop}`)
            }, 333))*/
    }

    // Invoques a function depending on a flagg
    calcCaller() {
        this.awayFromTop = window.pageYOffset
        this.scrollPosition = this.awayFromTop / this.browserHeight
        console.log('Scroll position = ' + this.scrollPosition)
        console.log('Away from top = ' + this.awayFromTop)
        if (this.typeOfAction === 'moveUp') {
            console.log('Inside if')
                //this.itemsToReveal.forEach(el => {
                //if (el.isRevealed == false) {

            this.moveUp(this.itemsToAction)
                //}
                //})
        } else {
            console.log("Input a valid action for ActionOnScroll")
            console.log("Parameter: " + this.typeOfAction)
        }
    }

    moveUp(el) {
        console.log('Inside moveUp')
            //el.style.transform = "translateY(" + this.levelOfAction + ")"
        if (this.awayFromTop > 10) {
            el.style.transform = "translateY(-50px)"
            console.log('Element top' + el.getBoundingClientRect().top)
        }
    }

}

export default ActionOnScroll;