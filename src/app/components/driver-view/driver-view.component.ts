import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Driver } from 'src/app/model/driver';

@Component({
  selector: 'app-driver-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './driver-view.component.html',
  styleUrls: ['./driver-view.component.css']
})
//[30-10-2023]
export class DriverViewComponent{
  //ESTE ATRIBUTO SERA RECIVIDO COMO PARAMETRO DEL PADRE -> HIJO cuando se invoque el componente
  @Input({required:true}) //indica que el atributo es obligatorio
  driver !: Driver | null; //indica que el atributo puede ser nulo porque en porque en driver.component el valor podia ser driver o null


  //COMUNICARNOS CON EL PADRE
  @Output()
  evento = new EventEmitter<string>();

  comunicate(){
    //emite un evento con el nombre del driver si existe si no devuelve undefined
    this.evento.emit(this.driver?.nombre);

    //irnos a driver.component.ts
  }

}
