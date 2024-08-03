import { Component, OnInit } from '@angular/core';
import { SidebarServcie } from './shared/services/sidebar.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  public isOpenSidebar$: Observable<boolean>;

  constructor(
    private sidebarService: SidebarServcie
  ){}

  ngOnInit(): void {
    this.setObservableData();
  }

  private setObservableData(){
    this.isOpenSidebar$ = this.sidebarService._isSidebarOpen$;
  }
}
