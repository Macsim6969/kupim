import { Component, OnInit } from '@angular/core';
import { DataInforamtion, InformationService } from '../../shared/services/information.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrl: './information.component.scss'
})
export class InformationComponent implements OnInit {
  public infoData: DataInforamtion
  public currentUrl = this.router.url;

  constructor(
    private informationService: InformationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeInformationDataFromService();
  }

  private initializeInformationDataFromService() {
    this.infoData = this.informationService._dataInformation;
  }

}
