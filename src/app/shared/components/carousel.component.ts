import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'carousel-component',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
    
    images = [];
    visibleSlides = [];
    slidePosition = 0;

    @Input() set carouselImages(images: Array<string>) {
        this.images = images
        this.ngOnInit()
    };
    
    @Output() activeSlideEvent = new EventEmitter<any>();

    ngOnInit(): void {
        let size = this.images.length < 4 ? this.images.length : 4
        this.visibleSlides = []
        for (let index = 0; index < size; index++) {
            const imageSource = this.images[index];
            this.visibleSlides.push(imageSource)
            if (index == 0) {
                this.passActiveSlide(imageSource)
            }
        }
    }

    carouselChange(forward: boolean) {
        this.visibleSlides = []
        let size = this.images.length < 4 ? this.images.length : 4
        if (forward) {
            this.slidePosition = this.slidePosition + 1
        } else {
            if (this.slidePosition > 0) {
                this.slidePosition = this.slidePosition - 1
            } else if (this.slidePosition == 0) {
                this.slidePosition = this.images.length
            }
        }
        for (let index = this.slidePosition; index < size + this.slidePosition; index++) {
            const element = this.images[index % this.images.length];
            this.visibleSlides.push(element)
        }
    }

    passActiveSlide(url: string) {
        this.activeSlideEvent.emit(url);
    }
}