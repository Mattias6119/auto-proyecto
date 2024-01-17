import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})

@Injectable()
export class PasajeroPage {

  //se crean variables 
  nombre: any;
  vehiculo: any;
  patente:  any;
  telefono: any;
  asientos: any;
  precio: any;
  destino:  any;



  constructor(public navCtrl: NavController) {
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

  ngOnInit() {
  }

  mostrarTarjeta() {
    this.navCtrl.navigateForward('/home'); 
  }



  public alertButtons = [
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Viaje reservado');
      },
    },
  ];

  setResult(ev: any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }

 

}
