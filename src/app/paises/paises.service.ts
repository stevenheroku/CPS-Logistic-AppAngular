import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paises } from './paises';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private url: string="http://localhost:8383/paises"


  constructor(private http:HttpClient) { }

   //metodo para obtener los clientes que tengo en la base de datos
   mostrarPais():Observable<Paises[]>
   {
     let direccion = this.url + "/view"
     return this.http.get<Paises[]>(direccion)  ;
   }
 
 
 
   
}
