import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DriverComponent } from './pages/driver/driver.component';
import { AboutComponent } from './pages/about/about.component';
import { E404Component } from './pages/e404/e404.component';
import { AuthorComponent } from './pages/about/author/author.component';
import { AngularComponent } from './pages/about/angular/angular.component';

export const routes: Routes = [
    { title: 'Home', path: 'home', component: HomeComponent },
    {title: 'Conductores', path:'driver/:name',//Los : actuan como parametros en una barra de dirección

        //VAMOS A HABILITAR QUE LA CARGA DEL COMPONENTE driver sea LAZY. porque si no por defecto se cargara a la fuerza
        loadComponent: () => {
            //import creara una promesa la cual devolvera un modulo (investigar que es modulo) y devolveremos su componente ya cargado
            return import('./pages/driver/driver.component').then(module => module.DriverComponent)
        }
    },
    
    {title: 'Sobre', path: 'about',
        loadComponent: () => {
            return import('./pages/about/about.component').then(m => m.AboutComponent)
        },
        children: [
            //de forma Lazy
            { title: 'Autor', path: 'author', loadComponent: () => import('./pages/about/about.component').then(mod => mod.AboutComponent) },
            //sin lazy
            { title: 'Angular', path: 'angular', component: AngularComponent },
            { path: '', redirectTo: '/about/angular', pathMatch: 'full' }
        ]
    },

    /*Irnos a la linea -4 de navbar.component.html
    pathMatch : 'full' nos indica que en todos los archivos especificados anteriormente. se aplicara el estilo especificado en
    routerLinkActive del archivo navbar.component.html
    */
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: E404Component },

];
