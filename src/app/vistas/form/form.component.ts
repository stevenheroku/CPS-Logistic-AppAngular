import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { Tarifas } from 'src/app/tarifas/tarifas';
import { Router } from '@angular/router';
import { TarifasService } from 'src/app/tarifas/tarifas.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    //nuevaTarifa = new FormGroup({
    //codigoCliente:new FormControl(''),
    //peso:new FormControl(''),
    //ancho:new FormControl(''),
    //alto:new FormControl(''),
    //largo:new FormControl(''),
    //nombrePaisOrigen:new FormControl(''),
   // nombreRegion:new FormControl(''),
    //descuentoCliente:new FormControl(''),
    //montoTarifa:new FormControl('')


    tfnueva:Tarifas = new Tarifas;

  //});
  //constructor(private tf:TarifasService, private router:Router) { }
  constructor(private tf:TarifasService, private router:Router) { }

  ngOnInit(): void {
  }

  //postForm(form:Tarifas){
    //this.tf.crearTarifa(form).subscribe(data =>{
     // console.log(data);
      
    //})

    //console.log(form);

  //}

    createTarifa(){
      return this.tf.crearTarifa(this.tfnueva).subscribe(
        data =>{
          this.router.navigate(['']),
          console.log(data)
        },
        err => console.log(err)
      )

  }


 

}
