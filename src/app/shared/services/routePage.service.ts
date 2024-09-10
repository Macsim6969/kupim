import { Injectable } from "@angular/core";


@Injectable()

export class RoutePageService {

  private routeLanguageMap = {
    '/': 'main',
    '/airplane': 'airplane',
    '/helicopter': 'helicopter',
    '/wheelchair': 'wheelchair',
    '/transport': 'transport',
    '/bicycle': 'bicycle',
    '/laptop': 'laptop',
    '/contacts': 'contacts',
    '/team': 'team',
    '/bike': 'bike',
    '/kick_skooter': 'kick_skooter',
    '/boat': 'boat',
    '/tractor': 'tractor',
    '/trailer': 'trailer',
    '/car': 'car',
    '/car/bmw': 'bmw',
    '/car/audi': 'audi',
    '/car/mercedes': 'mercedes',
    '/car/opel': 'opel',
    '/car/porshe': 'porshe',
    '/car/smart': 'smart',
    '/car/volkswagen': 'volkswagen',
    '/legal-information': 'legal_info',
    '/review': 'review',
    '/online-appraisal': 'online-appraisal',
    '/about-us': 'about-us',
    '/blog': 'blog',
    '/others': 'others',
    '/gear': 'gear',
    '/exercise-machines': 'exercise-machines',
    '/skis': 'skis',
    '/snowboard': 'snowboard',
    '/surfboard': 'surfboard',
    '/electronics': 'electronics',
    '/real-estate': 'real-estate'
  }

  get _routeLanguageMap(): { [key: string]: string } {
    return this.routeLanguageMap;
  }
}