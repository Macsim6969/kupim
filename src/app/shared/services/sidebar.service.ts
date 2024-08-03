import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable()

export class SidebarServcie {
  private isOpenSidebarSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  set _isSidebarOpen(value: boolean) {
    this.isOpenSidebarSubject.next(value);
  }

  get _isSidebarOpen$() {
    return this.isOpenSidebarSubject;
  }
}