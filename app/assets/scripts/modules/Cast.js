class Cast {
    constructor() {
        this.melaniePic = document.querySelector('.site-cast--melanie__photo')
        this.marioPic = document.querySelector('.site-cast--mario__photo')
        this.rousePic = document.querySelector('.site-cast--rouse__photo')
        this.melanieStory = document.querySelector('.site-cast--melanie__story')
        this.marioStoryR = document.querySelector('.site-cast--mario__story--right')
        this.marioStoryL = document.querySelector('.site-cast--mario__story--left')
        this.rouseStory = document.querySelector('.site-cast--rouse__story')
        this.nameMelanie = document.querySelector('.name-melanie')
        this.nameMario = document.querySelector('.name-mario')
        this.nameRouse = document.querySelector('.name-rouse')
        this.events()
    }
    events() {
        // Melanie events
        this.melaniePic.onmouseleave = () => {
            this.nameMelanie.style.opacity = '0'
        }
        this.melaniePic.onmouseenter = () => {
            this.nameMelanie.style.opacity = '1'
        }
        this.nameMelanie.onmouseleave = () => {
            this.marioPic.style.opacity = '1'
            this.rousePic.style.opacity = '1'
            this.melanieStory.style.opacity = '0'
        }
        this.nameMelanie.onmouseenter = () => {
                this.marioPic.style.opacity = '0'
                this.rousePic.style.opacity = '0'
                this.melanieStory.style.opacity = '1'
            }
            // Mario events
        this.marioPic.onmouseleave = () => {
            this.nameMario.style.opacity = '0'
        }
        this.marioPic.onmouseenter = () => {
            this.nameMario.style.opacity = '1'
        }
        this.nameMario.onmouseleave = () => {
            this.melaniePic.style.opacity = '1'
            this.rousePic.style.opacity = '1'
            this.marioStoryR.style.opacity = '0'
            this.marioStoryL.style.opacity = '0'
        }
        this.nameMario.onmouseenter = () => {
                this.melaniePic.style.opacity = '0'
                this.rousePic.style.opacity = '0'
                this.marioStoryR.style.opacity = '1'
                this.marioStoryL.style.opacity = '1'
            }
            // Rouse events
        this.rousePic.onmouseleave = () => {
            this.nameRouse.style.opacity = '0'
        }
        this.rousePic.onmouseenter = () => {
            this.nameRouse.style.opacity = '1'
        }
        this.nameRouse.onmouseleave = () => {
            this.marioPic.style.opacity = '1'
            this.melaniePic.style.opacity = '1'
            this.rouseStory.style.opacity = '0'
        }
        this.nameRouse.onmouseenter = () => {
            this.marioPic.style.opacity = '0'
            this.melaniePic.style.opacity = '0'
            this.rouseStory.style.opacity = '1'
        }
    }
}
export default Cast