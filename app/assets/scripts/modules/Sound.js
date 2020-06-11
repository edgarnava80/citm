class Sound {
    constructor() {
        this.backgroundMusic = document.querySelector('.sound__icon')
        this.audioFile = document.querySelector('.sound__audio')
        this.events()
    }
    events() {
        this.backgroundMusic.addEventListener("click", () => {
            console.log('Inside event, muted: ' + this.audioFile.muted)
            if (this.audioFile.muted === false) {
                this.audioFile.muted = true
                this.backgroundMusic.classList.remove('fa-volume-up')
                this.backgroundMusic.classList.add('fa-volume-off')
            } else {
                this.audioFile.muted = false
                this.backgroundMusic.classList.remove('fa-volume-off')
                this.backgroundMusic.classList.add('fa-volume-up')
            }
        })
    }
}

export default Sound