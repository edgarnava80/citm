class ImageGallery {
    constructor() {
        this.events()
    }
    events() {
        this.imageGalleryH()
        this.imageGalleryV()
    }


    imageGalleryH() {
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

    imageGalleryV() {
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
}
export default ImageGallery