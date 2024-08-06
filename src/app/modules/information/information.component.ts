import { Component, OnInit } from '@angular/core';
import { DataInforamtion, InformationService } from '../../shared/services/information.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrl: './information.component.scss'
})
export class InformationComponent implements OnInit {
  public infoData: DataInforamtion

  constructor(
    private informationService: InformationService
  ) { }

  ngOnInit(): void {
    this.initializeInformationDataFromService();
  }

  private initializeInformationDataFromService() {
    this.infoData = this.informationService._dataInformation;
  }

}
