import { Component, OnInit } from '@angular/core';
import { TarifasService } from './tarifas.service';
import { Router } from '@angular/router';
import { Tarifas } from './tarifas';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarifas',
  templateUrl: './tarifas.component.html',
  styleUrls: ['./tarifas.component.css']
})
export class TarifasComponent implements OnInit {

  tf:Tarifas[];
  formulatf: Tarifas[];
  tfnueva:Tarifas = new Tarifas;//crear la lista para poderla mostrarla
  constructor(private tfService: TarifasService, private router:Router) { }

  ngOnInit(): void {

    this.tfService.mostrarTarifa().subscribe( data =>{
      this.tf = data
        console.log(data)
       // a => this.usuario=a
    });

    this.tfService.servicioformula().subscribe( data =>{
      this.formulatf = data
        console.log(data)
       // a => this.usuario=a
    });

  }



  createTarifa(){
    return this.tfService.crearTarifa(this.tfnueva).subscribe(
      data =>{
        this.router.navigate(['']),
        console.log(data)
      },
      error => console.log(error)

    )
  }

}
