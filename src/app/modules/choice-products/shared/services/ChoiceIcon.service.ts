import { Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable()

export class ChoiceIconService {

  constructor(
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry
  ) {

    matIconRegistry.addSvgIcon('Laptop', domSanitizer.bypassSecurityTrustResourceUrl('/assets/img/main_page/car.svg'));

    matIconRegistry.addSvgIcon('Bike', domSanitizer.bypassSecurityTrustResourceUrl('/assets/img/main_page/moto.svg'));

    matIconRegistry.addSvgIcon('Bicycle', domSanitizer.bypassSecurityTrustResourceUrl('/assets/img/main_page/bike.svg'));

    matIconRegistry.addSvgIcon('Kick Skooter', domSanitizer.bypassSecurityTrustResourceUrl('/assets/img/main_page/scooter.svg'));

    matIconRegistry.addSvgIcon('Boat', domSanitizer.bypassSecurityTrustResourceUrl('/assets/img/main_page/boat.svg'));

    matIconRegistry.addSvgIcon('Tractor', domSanitizer.bypassSecurityTrustResourceUrl('/assets/img/main_page/tractor.svg'));
    
    matIconRegistry.addSvgIcon('Trailer', domSanitizer.bypassSecurityTrustResourceUrl('/assets/img/main_page/trailer.svg'));

    matIconRegistry.addSvgIcon('Airplane', domSanitizer.bypassSecurityTrustResourceUrl('/assets/img/transport/Airplane.svg'));

    matIconRegistry.addSvgIcon('Helicopter', domSanitizer.bypassSecurityTrustResourceUrl('/assets/img/transport/Helicopter.svg'));

    matIconRegistry.addSvgIcon('Wheelchair', domSanitizer.bypassSecurityTrustResourceUrl('/assets/img/transport/Wheelchair.svg'));

    matIconRegistry.addSvgIcon('Other', domSanitizer.bypassSecurityTrustResourceUrl('/assets/img/main_page/other.svg'));

  }
}