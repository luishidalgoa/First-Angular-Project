import { Component } from '@angular/core';
import { LogService } from 'src/app/services/log.service';

@Component({
  standalone:true,
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component {
  constructor(private logS: LogService){ //Tras poner : LogService . logS apuntara al servicio
    this.logS.log('Creando componente 1')
  }
}
