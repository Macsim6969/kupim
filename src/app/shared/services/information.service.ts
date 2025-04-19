import { Injectable } from '@angular/core';

export interface DataInforamtion {
  address: string;
  address2: string;
  dayWork: { title: string }[];
  telNumber: string;
  email: string;
}

@Injectable()
export class InformationService {
  private dataInform: DataInforamtion = {
    address: '244 Three Islands Boulevard, Hallandale Beach, FL 33009',
    address2: '25 NE 5th St, Miami, FL 33132, United States',
    dayWork: [
      {
        title: 'Monday - 09:00 AM - 07:00 PM',
      },
      {
        title: 'Tuesday - 09:00 AM - 07:00 PM',
      },
      {
        title: 'Wednesday - 09:00 AM - 07:00 PM',
      },
      {
        title: 'Thursday - 09:00 AM - 07:00 PM',
      },
      {
        title: 'Friday - 09:00 AM - 07:00 PM',
      },
      {
        title: 'Saturday - 09:00 AM - 07:00 PM',
      },
      {
        title: 'Sunday - 09:00 AM - 07:00 PM',
      },
    ],
    telNumber: '+1 727 509 14 49',
    email: 'Email: namegmail.com',
  };

  get _dataInformation(): DataInforamtion {
    return this.dataInform;
  }
}
