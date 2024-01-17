import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName} from '@angular/forms';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit{

  //creación de un token para viaje
  token= "dsgf24e2fsd";

  //Se crea una variable viaje con los atributos que contiene
  //la llave
  viaje = {
    nombre:'',
    vehiculo:'',
    patente:'',
    telefono:'',
    asientos:'',
    precio:'',
    destino:''

  }
  //se crea una variable publica llamada miformulario 
  public miFormulario = new FormGroup({
      nombre: new FormControl(['']),
      vehiculo: new FormControl(),
      patente: new FormControl(),
      telefono: new FormControl(),
      asientos: new FormControl(),
      precio: new FormControl(),
      destino: new FormControl()
  });


  constructor() {
    
   }

  ngOnInit() {
  }

  //se crea un modelo onSubmit que permite ver los registros ingresados en el formulario
  //por consola
  onSubmit() {
    this.producto()
    console.log("que nombre? "+ this.viaje.nombre);
    console.log("que vehiculo? "+ this.viaje.vehiculo);
    console.log("que patente? "+ this.viaje.patente);
    console.log("que telefono? "+ this.viaje.telefono);
    console.log("que asientos? "+ this.viaje.asientos);
    console.log("que precio? "+ this.viaje.precio);
    console.log("que destino? "+ this.viaje.destino);
  }


  //se crea un modelo producto que guarda los datos de tipo string
  //en el localStorage
  producto(){
    localStorage.setItem('token',this.token);
    localStorage.setItem('nombre', JSON.stringify(this.viaje.nombre));
    localStorage.setItem('vehiculo', JSON.stringify(this.viaje.vehiculo));
    localStorage.setItem('patente', JSON.stringify(this.viaje.patente));
    localStorage.setItem('telefono', JSON.stringify(this.viaje.telefono));
    localStorage.setItem('asientos', JSON.stringify(this.viaje.asientos));
    localStorage.setItem('precio', JSON.stringify(this.viaje.precio));
    localStorage.setItem('destino', JSON.stringify(this.viaje.destino));

  }
  
  //Boton alerta al momnento de ingresar el viaje
  public alertButtons = [
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Viaje registrado');
      },
    },
  ];

  setResult(ev: any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }

}
