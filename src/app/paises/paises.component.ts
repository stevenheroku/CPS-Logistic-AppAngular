import { Component, OnInit } from '@angular/core';
import { Paises } from './paises';
import { PaisesService } from './paises.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {


  listpaisesdestino:Paises[];
  constructor(private ps: PaisesService, private router:Router) { }

  ngOnInit(): void {

    
    this.ps.mostrarPais().subscribe( data =>{
      this.listpaisesdestino = data
        console.log(data)
    });
  }

}
