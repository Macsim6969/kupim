import { Component } from '@angular/core';
import { sidebarService } from '../../../shared/services/sidebar.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {


  constructor(
    private sidebarService: sidebarService
  ){}

  public closeMenu(): void{
    this.sidebarService._isSidebarOpen = false;
    document.body.style.overflow = '';
  }
}
