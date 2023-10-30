import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponencial',
  standalone: true
})
//[30-10-2023]
export class ExponencialPipe implements PipeTransform {
  //value es el valor que se le pasa al pipe, Exponente es el valor que se le pasa al pipe
  transform(value: number, Exponente=1): unknown {
    return Math.pow(value,Exponente);
  }

}
