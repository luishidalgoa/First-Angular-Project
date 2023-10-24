import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-driver',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent {
  @Input()
  name?: string;  

  private router = inject(Router)

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => console.log(params)); //parece ser que extrae datos a partir de la barra de direccion
  }

  irInicio(){
    //navegar al inicio
    //this.router.navigateByUrl("/");
    this.router.navigate(['driver','Luis']);//indicaria en el navegador la siguiente ruta: /driver/Luis
/*
    this.ejecuta((name:string)=>{
      console.log('HOLA MUNDO' + name)
    });*/



  }

  /*ejecuta(fn:any){
    console.log('A continuacion realizo la operacion');
    fn();
  }
}*/
}
