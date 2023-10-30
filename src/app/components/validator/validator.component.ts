import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LogService } from 'src/app/services/log.service';
import { DriverService } from 'src/app/services/driver.service';
import { Router, RouterModule } from '@angular/router';
import { Driver } from 'src/app/model/driver';

@Component({
  selector: 'app-validator',
  standalone: true,
  imports: [CommonModule, RouterModule,ValidatorComponent, FormsModule],
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.css']
})
export class ValidatorComponent {
  edad: number = 15;
  name!: string;
  esMenor: boolean = true;

  /*
  named(){
    let result=document.querySelector('input')?.value
    if(typeof result === 'string'){
      this.name=result;
      this.comprobar();
    }else{
      this.name='';
    }
    
  }

  menos(): void{
    if(this.edad>0){
      this.edad--;
      this.comprobar()
    }
  }
  mas(): void{
    this.edad++;
    this.comprobar()
  }

  comprobar(){
    if(this.edad>=18 && this.name.length>1){
      this.esMenor=false;
    }else{
      this.esMenor=true;
    }
  }
  */






  //V2
  //ES UNA FORMA DE DEFINIR ESTILOS. ES valida pero en proyectos grandes no es la mejor
  estiloLetras = {};
  constructor() { }

  /*incrementaEdad(): void {
    this.edad++;
    this.compruebaEstilo();
  }
  decrementarEdad(): void {
    this.edad--;
    this.compruebaEstilo();
  }*/
  compruebaEstilo() {
    this.estiloLetras = {
      'color': this.edad >= 18 ? 'green' : 'red',
      'font-weight': this.edad >= 18 ? 'bolder' : 'normal',
      'font-size': this.edad >= 18 ? '1.5rem' : '1rem'
    };
  }
  resetea(): void {
    this.name = '';
    this.edad = 10;
  }
  /*inserta(): void {
    alert(`${this.name} ya puede sacarse la licencia`);
    this.resetea();
  }*/
  poneMayuscula(event?: Event): void {
    console.log(event);
    this.name = this.name.toUpperCase().trim();
  }

  //[23-10/2023] 
  esMayorDeEdad: boolean = false;
  private logS = inject(LogService); //importamos el servicio
  private router = inject(Router); //importamos el servicio

  //personas: Persona[] = [];
  //personas: {nombre:string,edad:number} [] = []; //es una forma rapida de declarar un objeto
  //personas: Driver [] = [];
  public driverS = inject(DriverService); //Este servicio ya tendra por defecto el array

  incrementaEdad(): void {
    this.edad++;
    this.esMayorDeEdad = this.edad >= 18 ? true : false
    this.compruebaEstilo();
  }
  decrementarEdad(): void {
    this.edad--;
    this.esMayorDeEdad = this.edad >= 18 ? true : false
    this.compruebaEstilo();
  }
  inserta(): void {
    alert(`${this.name} ya puede sacarse la licencia`);
    this.driverS.add({
      nombre:this.name,
      edad:this.edad
    });


    this.logS.log(JSON.stringify(this.driverS.data))

    this.resetea();
  }




  //[30-10/2023]
  goToDriver(name : string){
    this.router.navigateByUrl('/driver/'+name);
  }
}
