import { Injectable, inject } from '@angular/core';
import { Driver } from '../model/driver';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  private _data: Driver[] = []; //en JS las variables privadas se escriben con _ como prefijo si van a tener un getter como minimo
  private logS = inject(LogService)
  constructor() {
    
  }
  
  add(driver:Driver): void{
    this._data.push(driver);
    this.logS.log("Se ha insertado un nuevo driver");
  }

  
  get data() {
    return this._data; 
  }
  
}
