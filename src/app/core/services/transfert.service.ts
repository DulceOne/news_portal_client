import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransfertService {
  public newsByGame = new BehaviorSubject<boolean>(false)
  public cast = this.newsByGame.asObservable() 
  constructor() { }

  setData(data) {
    this.newsByGame.next(data)
  }

  getData() {

  }
}
