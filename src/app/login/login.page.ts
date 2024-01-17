import { Component} from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  //creación de un token para viaje
  token= "dsgf24e2fsd";

  //Se crea una variable viaje con los atributos que contiene
  //la llave
  ingreso = {
    usuario:'',
    correo:'',
    pass:''
   }

  
  //se crea una variable publica llamada miformulario 
  public miUsuario = new FormGroup({
      usuario: new FormControl(['']),
      correo: new FormControl(),
      pass: new FormControl()
  });


  constructor() {
    
   }

  ngOnInit() {
  }

  //se crea un modelo onSubmit que permite ver los registros ingresados en el formulario
  //por consola
  onSubmit() {
    this.usuarios()
    console.log("que nombre? "+ this.ingreso.usuario);
    console.log("que vehiculo? "+ this.ingreso.correo);
    console.log("que patente? "+ this.ingreso.pass);
   
  }


  //se crea un modelo producto que guarda los datos de tipo string
  //en el localStorage
  usuarios(){
    localStorage.setItem('token',this.token);
    localStorage.setItem('nombre', JSON.stringify(this.ingreso.usuario));
    localStorage.setItem('vehiculo', JSON.stringify(this.ingreso.correo));
    localStorage.setItem('patente', JSON.stringify(this.ingreso.pass))
  }
  
  //Boton alerta al momnento de ingresar el viaje
  public alertButtons = [
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Usuario creado');
      },
    },
  ];

  setResult(ev: any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }

}
