import { Injectable } from "@angular/core";


@Injectable()

export class RoutePageService {

  private routeLanguageMap = {
    '/': 'main',
    '/fl/airplane': 'airplane',
    '/fl/helicopter': 'helicopter',
    '/fl/wheelchair': 'wheelchair',
    '/fl/transport': 'transport',
    '/fl/motorcycle': 'motorcycle',
    '/fl/laptop': 'laptop',
    '/fl/contacts': 'contacts',
    '/fl/team': 'team',
    '/fl/bike': 'bike',
    '/fl/scooter': 'scooter',
    '/fl/watercraft': 'watercraft',
    '/fl/tractor': 'tractor',
    '/fl/trailer': 'trailer',
    '/fl/car': 'car',
    '/fl/car/bmw': 'bmw',
    '/fl/car/audi': 'audi',
    '/fl/car/mercedes': 'mercedes',
    '/fl/car/opel': 'opel',
    '/fl/car/porshe': 'porshe',
    '/fl/car/smart': 'smart',
    '/fl/car/volkswagen': 'volkswagen',
    '/fl/legal-information': 'legal_info',
    '/fl/review': 'review',
    '/fl/online-appraisal': 'online-appraisal',
    '/fl/about-us': 'about-us',
    '/fl/blog': 'blog',
    '/fl/others': 'others',
    '/fl/gear': 'gear',
    '/fl/exercise-machines': 'exercise-machines',
    '/fl/skis': 'skis',
    '/fl/snowboard': 'snowboard',
    '/fl/surfboard': 'surfboard',
    '/fl/electronics': 'electronics',
    '/fl/air-conditioner': 'air-conditioner',
    '/fl/building-tool': 'building-tool',
    '/fl/cacuum-cleaner': 'cacuum-cleaner',
    '/fl/camera': 'camera',
    '/fl/coffee-maker': 'coffee-maker',
    '/fl/computer': 'computer',
    '/fl/drone': 'drone',
    '/fl/fridge': 'fridge',
    '/fl/gaming-consoles': 'gaming-consoles',
    '/fl/headphones': 'headphones',
    '/fl/lawn-mower': 'lawn-mower',
    '/fl/lens': 'lens',
    '/fl/phone': 'phone',
    '/fl/smartwatch': 'smartwatch',
    '/fl/tablets': 'tablets',
    '/fl/tv': 'tv',
    '/fl/vr-headsets': 'vr-headsets',
    '/fl/washing-machine': 'washing-machine',
    '/fl/real-estate': 'real-estate',
    '/fl/apartment': 'apartment',
    '/fl/garage': 'garage',
    '/fl/house': 'house',
    '/fl/land-lots': 'land-lots',
    '/fl/restaurant-cafe': 'restaurant-cafe',
    '/fl/townhouse': 'townhouse',
    '/fl/warehouse-facilities': 'warehouse-facilities',
    '/fl/real-estate-others': 'others-estate'
  }

  get _routeLanguageMap(): { [key: string]: string } {
    return this.routeLanguageMap;
  }
}
