class Menu {
    constructor() {
        this.menuIcon = document.querySelector(".navigation")
            //this.events()
    }
    events() {
        this.menuIcon.addEventListener("click", () => { this.toggleMenu() })
    }
    toggleMenu() {
        this.menuIcon.classList.toggle("navigation--is-visible")
    }
}

export default Menu;