import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()

export class StoreService {
  private activePageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private lastScrollY: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private oldScrollY: number;

  set _activePage(newValue: string) {
    this.activePageSubject.next(newValue);
  }

  get _activePage$() {
    return this.activePageSubject;
  }

  set _ScrollY(newValue: number) {
    this.oldScrollY = this.lastScrollY.getValue();
    this.lastScrollY.next(newValue);
  }

  get _ScrollY$() {
    return this.lastScrollY;
  }

  get _OldScrollY(): number {
    return this.oldScrollY
  }
}