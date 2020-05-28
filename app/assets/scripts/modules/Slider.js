class Slider {
    constructor(slider, arrLft, arrRgt) {
        this.images = document.querySelectorAll(slider);
        this.arrowLeft = document.querySelector(arrLft);
        this.arrowRight = document.querySelector(arrRgt);
        this.current = 0;
        this.startSlider();
        this.events();
    }
    events() {
            // Left arrow click
            this.arrowLeft.addEventListener("click", () => {
                if (this.current === 0) {
                    this.current = this.images.length;
                }
                this.slideLeft();
            });
            // Right arrow click
            this.arrowRight.addEventListener("click", () => {
                if (this.current === this.images.length - 1) {
                    this.current = -1;
                }
                this.slideRight();
            });
        }
        //Hide all images
    reset() {
            this.images.forEach(el => {
                el.style.display = 'none';
            });
        }
        //Show first image
    startSlider() {
            this.reset();
            this.images[0].style.display = 'block';
        }
        //Show previous image
    slideLeft() {
            this.reset();
            this.images[this.current - 1].style.display = 'block';
            this.current--;
        }
        //Show next image
    slideRight() {
        this.reset();
        this.images[this.current + 1].style.display = 'block';
        this.current++;
    }

}

export default Slider;