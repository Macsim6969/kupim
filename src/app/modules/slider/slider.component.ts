import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {DragScrollComponent} from 'ngx-drag-scroll';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  public sliderData = [
    {
      "img": "/assets/img/main_page/Electronics.png",
      "alt": "Sell my Electronics",
      "link": "/fl/electronics",
      isActiveMobile: true
    },
    {
      "img": "/assets/img/transport/Car.png",
      "alt": "Sell my Car",
      "link": "/fl/car",
      isActiveMobile: false
    },
    {
      "img": "/assets/img/transport/Choose_a_motorcycle.png",
      "alt": "Sell my Motorcycle",
      "link": "/fl/motorcycle",
      isActiveMobile: false
    },
    {
      "img": "/assets/img/transport/Choose_a_bike.png",
      "alt": "Sell my Bike",
      "link": "/fl/bike",
      isActiveMobile: false
    },
    {
      "img": "/assets/img/See_all.webp",
      "alt": "See All",
      "link": "/fl",
      isActiveMobile: true
    },
  ]

}
