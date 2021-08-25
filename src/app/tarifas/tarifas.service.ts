import { Injectable } from '@angular/core';
import { Tarifas } from './tarifas';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarifasService {

  private url:string="http://localhost:8383/tarifas"

  constructor(private http:HttpClient) { }

  //metodo para obtener los clientes que tengo en la base de datos
  mostrarTarifa():Observable<Tarifas[]>
  {
    let direccion = this.url + "/mostrar"
    return this.http.get<Tarifas[]>(direccion);
  }

  //metodo para crear una tarifa
  crearTarifa(cps:Tarifas):Observable<Tarifas>
  {
    let direccion = "http://localhost:8383/tarifas/creartarifa"
    return this.http.post<Tarifas>(direccion,cps)
  }

  servicioformula():Observable<Tarifas[]>
  {
    let servicio = this.url + "/formula"
    return this.http.get<Tarifas[]>(servicio);
  }

 



  
}
