import { Component, OnInit } from '@angular/core';
import { Usuarios } from './usuarios';
import { UsuariosService } from './usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  titulo:string ="CLIENTES";

  usuario:Usuarios[];//crear la lista para poderla mostrarla




  constructor(private usuarioservice: UsuariosService, private router:Router) { }

  ngOnInit(): void {

    this.usuarioservice.mostrarUser().subscribe( data =>{
      this.usuario = data
        console.log(data)
       // a => this.usuario=a
    });
  }



}
