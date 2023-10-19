import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-validator',
  standalone: true,
  imports: [CommonModule, ValidatorComponent],
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.css']
})
export class ValidatorComponent {
  counter: number=15;
  name!: string;
  esMenor: boolean=true;



  named(){
    this.name;
  }

  menos(): void{
    if(this.counter>0){
      this.counter--;
      this.comprobar()
    }
  }
  mas(): void{
    this.counter++;
    this.comprobar()
  }

  comprobar(){
    if(this.counter>=18){
      this.esMenor=false;
    }else{
      this.esMenor=true;
    }
  }
}
