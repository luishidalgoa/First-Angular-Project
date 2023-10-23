import { Injectable } from '@angular/core';

@Injectable()/*({
  providedIn: 'root' //a que nivel estara inyectado. Por defecto estara injectado en todos los modulos == root
  //si no indicases el root debes injectarlo en el app.config
})*/
export class LogService {
  private cont:number=0;

  constructor() { }

  log(msg: string):void{
    console.log(`${++this.cont} ${msg}`) //las `` nos permiten concatenar valores de forma mas sencilla y limpia

  }

  error(msg: string):void{
    console.error(`${++this.cont} ${msg}`)
  }
  warn(msg: string):void{
    console.warn(`${++this.cont} ${msg}`)
  }
}
