import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { C1Component } from './components/c1/c1.component';
import { C2Component } from './components/c2/c2.component';
import { ValidatorComponent } from './components/validator/validator.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, C1Component, C2Component,ValidatorComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Primera-prueba';
  contador: number = 0;


  incrementar(): void {
    this.contador++;
  }
  named(){
    
  }
}
