import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class RevealOnScroll {
    constructor(els, pct) {
        this.itemsToReveal = els
        this.thresholdPercent = pct
        this.browserHeight = window.innerHeight
        this.hideInitially()
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)
        this.events()
    }

    events() {
        window.addEventListener("scroll", this.scrollThrottle)
        window.addEventListener("resize", debounce(() => {
            console.log("resize just ran")
            this.browserHeight = window.innerHeight
        }, 333))
    }

    calcCaller() {
            console.log("scroll ran")
            this.itemsToReveal.forEach(el => {
                if (el.isRevealed == false) {
                    this.calculateIfScrolledTo(el)
                }
            })
        }
        // Reveals elemnts and stop listening the scroll event
    calculateIfScrolledTo(el) {
        if (window.scrollY + this.browserHeight > el.offsetTop) {
            let scrollPercent = (el.getBoundingClientRect().top / this.browserHeight) * 100
            if (scrollPercent < this.thresholdPercent) {
                console.log("scroll percent: " + scrollPercent)
                el.classList.add("reveal-item--is-visible")
                el.isRevealed = true
                    //if (el.isLastItem) {
                    //    window.removeEventListener("scroll", this.scrollThrottle)
                    //}
            }
        }
    }

    hideInitially() {
        this.itemsToReveal.forEach(el => {
            el.classList.add("reveal-item")
            el.isRevealed = false
        })
        this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true
    }
}

export default RevealOnScroll;