import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class Menu {
    constructor() {
        this.menuIcon = document.querySelector(".navigation")
        this.menuLinks = document.querySelectorAll(".navigation__item")
        this.menuCheckbox = document.querySelector(".navigation__checkbox")
        this.pageSections = document.querySelectorAll(".page-section")
        this.browserHeight = window.innerHeight
        this.previousScrollY = window.scrollY
        this.events()
    }
    events() {
            window.addEventListener("scroll", throttle(() => this.runOnScroll(), 200))
                //this.menuIcon.addEventListener("click", () => { this.toggleMenu() })
            window.addEventListener("resize", debounce(() => {
                this.browserHeight = window.innerHeight
            }, 333))
            this.hideMenu()
        }
        //Hide menu when a link is clicked
    hideMenu() {
        this.menuLinks.forEach(el => el.addEventListener("click", () => this.menuCheckbox.checked = false))
    }

    runOnScroll() {
        this.defineScrollDirection()
        this.pageSections.forEach(el => this.calcSection(el))
    }

    defineScrollDirection() {
            if (window.scrollY > this.previousScrollY) {
                this.scrollDirection = 'down'
            } else {
                this.scrollDirection = 'up'
            }
            this.previousScrollY = window.scrollY
        }
        //Apply a style on a menu link when the user in in that specific section of the page
    calcSection(el) {
        if (window.scrollY + this.browserHeight > el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight) {
            let scrollPercent = el.getBoundingClientRect().y / this.browserHeight * 100
            if (scrollPercent < 18 && scrollPercent > -0.1 && this.scrollDirection === 'down' || scrollPercent < 33 && this.scrollDirection === 'up') {
                let matchingLink = el.getAttribute("matching-link")
                document.querySelectorAll(`.navigation__item a:not(${matchingLink})`).forEach(el => el.classList.remove("is-current-link"))
                document.querySelector(matchingLink).classList.add("is-current-link")
            }
        }
    }

    toggleMenu() {
        this.menuIcon.classList.toggle("navigation--is-visible")
    }
}

export default Menu;