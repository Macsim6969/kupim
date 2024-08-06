import { Component } from '@angular/core';
import { sidebarService } from '../../../shared/services/sidebar.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  constructor(
    private sidebarService: sidebarService,
    private router: Router
  ){}

  public closeMenu(): void{
    this.sidebarService._isSidebarOpen = false;
    document.body.style.overflow = '';
  }

  public openPage(url: string){
    this.router.navigate([url], {queryParamsHandling: 'merge'}).then();
  }
}
