import { Injectable } from '@angular/core';

export interface DataInforamtion {
  address: string
  dayWork: { title: string }[]
  telNumber: string
  email: string
}

@Injectable()

export class InformationService {
  private dataInform: DataInforamtion = {
    address: "12805 SW 6th St, Miami, FL 33184, United States",
    dayWork: [
      {
        title: "Monday - 09:00 - 19:00"
      },
      {
        title: "Tuesday - 09:00 - 19:00"
      },
      {
        title: "Wednesday - 09:00 - 19:00"
      },
      {
        title: "Thursday - 09:00 - 19:00"
      },
      {
        title: "Friday - 09:00 - 19:00"
      },
      {
        title: "Saturday - 09:00 - 19:00"
      },
      {
        title: "Sunday - 09:00 - 19:00"
      }
    ],
    telNumber: "Tel: +1 727 509 14 49",
    email: "Email: namegmail.com"
  }

  get _dataInformation(): DataInforamtion {
    return this.dataInform;
  }
}