import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()

export class StoreService {
  private activePageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private lastScrollY: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  set _activePage(newValue: string) {
    this.activePageSubject.next(newValue);
  }

  get _activePage$() {
    return this.activePageSubject;
  }

  set _ScrollY(newValue: number){
    this.lastScrollY.next(newValue);
  }

  get _ScrollY$(){
    return this.lastScrollY;
  }
}