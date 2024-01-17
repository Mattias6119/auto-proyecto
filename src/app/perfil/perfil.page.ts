import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  nombre: any;
  correo: any;

  constructor() { 
    this.nombre = localStorage.getItem('usuario');
    this.correo = localStorage.getItem('correo');
  }

  ngOnInit() {
  }

}
