import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //se crean variables 
  
  nombre: any;
  vehiculo: any;
  patente:  any;
  telefono: any;
  asientos: any;
  precio: any;
  destino:  any;
  //variables


 
  constructor() {
    //traemos los datos guardados en el local storage
    this.nombre = localStorage.getItem('nombre');
    this.vehiculo = localStorage.getItem('vehiculo');
    this.patente = localStorage.getItem('patente');
    this.telefono = localStorage.getItem('telefono');
    this.asientos = localStorage.getItem('asientos');
    this.precio = localStorage.getItem('precio');
    this.destino = localStorage.getItem('destino');
    //se hace un consolelog para asegurar la correcta extracción de datos
    console.log("datos:" + localStorage.getItem('nombre'));
   


  }


}
