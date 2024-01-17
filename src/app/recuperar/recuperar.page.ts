import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  token= "dsgf24e2fsd";

  //Se crea una variable viaje con los atributos que contiene
  //la llave
  restore = {
    password:'',
    newpassword:''
   }

  
  //se crea una variable publica llamada miformulario 
  public miRestore = new FormGroup({
      password: new FormControl(['']),
      newpassword: new FormControl(),
  });


  constructor() {
    
   }

  ngOnInit() {
  }

  //se crea un modelo onSubmit que permite ver los registros ingresados en el formulario
  //por consola
  onSubmit() {
    this.recuperacion()
    console.log("que nombre? "+ this.restore.password);
    console.log("que vehiculo? "+ this.restore.newpassword);
   
  }


  //se crea un modelo producto que guarda los datos de tipo string
  //en el localStorage
  recuperacion(){
    localStorage.setItem('token',this.token);
    localStorage.setItem('nombre', JSON.stringify(this.restore.password));
    localStorage.setItem('vehiculo', JSON.stringify(this.restore.newpassword));
  }
  
  //Boton alerta al momnento de ingresar el viaje
  public alertButtons = [
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Contraseña cambiada de forma correcta.');
      },
    },
  ];

  setResult(ev: any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }

}
