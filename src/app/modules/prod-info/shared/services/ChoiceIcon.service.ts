import { Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable()

export class ProdIconService {

  constructor(
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry
  ) {

    matIconRegistry.addSvgIcon('Transport', domSanitizer.bypassSecurityTrustResourceUrl('/assets/img/main_page/Transport.svg'));

    matIconRegistry.addSvgIcon('Furniture', domSanitizer.bypassSecurityTrustResourceUrl('/assets/img/main_page/Furniture.svg'));

    matIconRegistry.addSvgIcon('Electronics', domSanitizer.bypassSecurityTrustResourceUrl('/assets/img/main_page/Electronics.svg'));

    matIconRegistry.addSvgIcon('Real_estate', domSanitizer.bypassSecurityTrustResourceUrl('/assets/img/main_page/Real_estate.svg'));

    matIconRegistry.addSvgIcon('Estate', domSanitizer.bypassSecurityTrustResourceUrl('/assets/img/main_page/Estate.svg'));

    matIconRegistry.addSvgIcon('Gear', domSanitizer.bypassSecurityTrustResourceUrl('/assets/img/main_page/Gear.svg'));
    
    matIconRegistry.addSvgIcon('Others', domSanitizer.bypassSecurityTrustResourceUrl('/assets/img/main_page/Others.svg'));


  }
}