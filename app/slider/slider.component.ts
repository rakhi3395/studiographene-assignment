import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: false, showIndicators: true } }
 ],
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  images: string[] = [
    'assets/images/one.JPG',
    'assets/images/two.JPG',
    'assets/images/third.JPG',
    'assets/images/four.JPG',
    'assets/images/five.JPG',
    'assets/images/six.JPG',
  ];

  noWrapSlides = false;
  showIndicator = true;

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
  };

  slickInit(e:any) {
    console.log('slick initialized');
  }
  breakpoint(e:any) {
    console.log('breakpoint');
  }
  
  afterChange(e:any) {
    console.log('afterChange');
  }
  
  beforeChange(e:any) { 
    console.log('beforechange');

  }

    

}
