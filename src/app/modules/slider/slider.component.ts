import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  @ViewChild('dragg', { read: DragScrollComponent }) ds: DragScrollComponent;
  public sliderData = [   
      {
        "img": "/assets/img/electronics/Air_conditioner.svg",
        "title": "Air Conditioner"
      },
      {
        "img": "/assets/img/electronics/Building_tool.svg",
        "title": "Building Tool"
      },
      {
        "img": "/assets/img/electronics/Camera.svg",
        "title": "Camera"
      },
      {
        "img": "/assets/img/electronics/Coffee_maker.svg",
        "title": "Coffee Maker"
      },
      {
        "img": "/assets/img/electronics/Computer.svg",
        "title": "Computer"
      },
      {
        "img": "/assets/img/electronics/Drone.svg",
        "title": "Drone"
      },
      {
        "img": "/assets/img/electronics/Fridge.svg",
        "title": "Fridge"
      },
      {
        "img": "/assets/img/electronics/Gaming_consoles.svg",
        "title": "Gaming Consoles"
      },
      {
        "img": "/assets/img/electronics/Headphones.svg",
        "title": "Headphones"
      },
      {
        "img": "/assets/img/electronics/Laptop.svg",
        "title": "Laptop"
      },
      {
        "img": "/assets/img/electronics/Lawn_mower.svg",
        "title": "Lawn Mower"
      },
      {
        "img": "/assets/img/electronics/Lens.svg",
        "title": "Lens"
      },
      {
        "img": "/assets/img/electronics/Phone.svg",
        "title": "Phone"
      },
      {
        "img": "/assets/img/electronics/Smartwatch.svg",
        "title": "Smartwatch"
      },
      {
        "img": "/assets/img/electronics/Tablets.svg",
        "title": "Tablets"
      },
      {
        "img": "/assets/img/electronics/TV.svg",
        "title": "Tv"
      },
      {
        "img": "/assets/img/electronics/Vacuum_cleaner.svg",
        "title": "Cacuum Cleaner"
      },
      {
        "img": "/assets/img/electronics/VR_headsets.svg",
        "title": "Vr Headsets"
      },
      {
        "img": "/assets/img/electronics/Washing_machine.svg",
        "title": "Washing Machine"
      },
      {
        "img": "/assets/img/main_page/Others.png",
        "title": "Others"
      }
  
  ]

}
