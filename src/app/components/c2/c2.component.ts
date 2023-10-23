import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-c2',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      c2 works!
    </p>
  `,
  styles: [
  ]
})
export class C2Component {
  private logS = inject(LogService); //2º forma de injectar. ES MAS ELEGANTE

  constructor(){
    this.logS.warn("Creando componente 2");
  }
}
