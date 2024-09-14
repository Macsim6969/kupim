import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take, timer } from 'rxjs';
import { StoreService } from '../../shared/services/store.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  public state: string;
  public date: number = new Date().getFullYear();
  constructor(
    private route: ActivatedRoute,
    private rotuer: Router,
    private store: StoreService
  ) { }

  ngOnInit(): void {
    this.getQueryData();
  }

  private getQueryData() {
    this.route.queryParams.pipe(take(1)).subscribe((data) => this.state = this.capitalizeFirstLetter(data['state']));
  }

  public openPage(url: string) {
    this.rotuer.navigate([url], { queryParamsHandling: 'merge' }).then(() => {
      // timer(500).pipe(take(1)).subscribe(() => {
      //   window.scrollTo({
      //     top: this.store._OldScrollY,
      //     behavior: 'smooth'
      //   });
      // })
    });
  }

  private capitalizeFirstLetter(value: string): string {
    if (!value) return value;
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
