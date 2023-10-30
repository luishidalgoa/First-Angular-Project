import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidatorComponent } from 'src/app/components/validator/validator.component';
import { ExponencialPipe } from 'src/app/pipes/exponencial.pipe';
import { ResaltadorDirective } from 'src/app/directives/resaltador.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ValidatorComponent,ExponencialPipe,ResaltadorDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy, OnChanges, DoCheck {
  n: number = 0;
  //opcional
  fecha= new Date();

  constructor() { }

  ngOnInit(): void {
    console.log('INIT');
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('CHANGES');
  }

  ngDoCheck(): void {
    console.log('CHECK');
  }

  ngOnDestroy(): void {
    console.log('DESTROY');
  }

}
