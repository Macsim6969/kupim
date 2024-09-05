import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()

export class StoreService {
  private activePageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  set _activePage(newValue: string) {
    this.activePageSubject.next(newValue);
  }

  get _activePage$(){
    return this.activePageSubject;
  }
}