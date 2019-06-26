import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsActiveService {

  public isActive:boolean;
  
  constructor() {
    this.isActive = false;
   }
  estat(bool : boolean) {
    this.isActive = bool;
  }
  getEstat() : boolean{
    return this.isActive;
  }
}
