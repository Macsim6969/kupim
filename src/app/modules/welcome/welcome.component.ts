import { Component } from '@angular/core';
import { SidebarServcie } from '../../shared/services/sidebar.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

  constructor(
    private sidebarService: SidebarServcie
  ) { }

  public openSidebar() {
    this.sidebarService._isSidebarOpen = true;
  }

}
