import { Injectable, inject } from '@angular/core';
import { Driver } from '../model/driver';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class DriverService{
  private _data: Driver[] = []; //en JS las variables privadas se escriben con _ como prefijo si van a tener un getter como minimo
  private logS = inject(LogService)
    //ANTES
  /*add(driver: Driver): void {
    this._data.push(driver);
    this.logS.log("Se ha insertado un nuevo driver");
  }*/


  get data() {
    return this._data;
  }

  //[30-10-2023]
  getByName(name: string): Driver | null {
    let result = null;
    //guardamos en un array todos los elementos que coincidan con el nombre
    let coincidences:Driver[]=this._data.filter(elemento=>elemento.nombre===name);
    //si el array tiene algun elemento, devolvemos el primero sino devolvemos null
    result= coincidences.length>0?coincidences[0]:null;

    return result;
  }
  constructor() {
    //cargaremos los datos del localStorage y los guardaremos en el array data
    const data = localStorage.getItem("data");
    if(data){
      this._data = JSON.parse(data);
    }
  }

  /**
   * añade un nuevo driver al array y lo guarda en el localStorage
   * @param driver 
   */
  add(driver: Driver): void {
    this._data.push(driver);
    //ACTUALIZAR MI LISTA LOCAL
    localStorage.setItem("data",JSON.stringify(this._data));

    this.logS.log("Se ha insertado un nuevo driver");
  }
}
