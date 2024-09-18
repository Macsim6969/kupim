import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()

export class StoreService {
  private activePageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private lastScrollY: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private lastActivePageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  set _activePage(newValue: string) {
    this.activePageSubject.next(newValue);
  }

  get _activePage$() {
    this._oldActivePage = this.activePageSubject.getValue();
    return this.activePageSubject;
  }

  set _ScrollY(newValue: number) {
    this.lastScrollY.next(newValue);
  }

  get _ScrollY$() {
    return this.lastScrollY;
  }

  set _oldActivePage(newValue: string) {
    this.lastActivePageSubject.next(newValue);
  }

  get _oldActivePage() {
    return this.lastActivePageSubject.getValue();
  }
}