import { Component, OnInit } from '@angular/core';
import { DataInforamtion, InformationService } from '../../../../../shared/services/information.service';

@Component({
  selector: 'app-address-data',
  templateUrl: './address-data.component.html',
  styleUrl: './address-data.component.scss'
})
export class AddressDataComponent implements OnInit {
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
