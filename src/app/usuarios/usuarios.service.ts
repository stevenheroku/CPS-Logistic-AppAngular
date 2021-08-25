import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Usuarios } from './usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url: string="http://localhost:8383/cliente"

  constructor(private http:HttpClient) { }
  
  //metodo para obtener los clientes que tengo en la base de datos
  mostrarUser():Observable<Usuarios[]>
  {
    let direccion = this.url + "/user"
    return this.http.get<Usuarios[]>(direccion)  ;
  }

  //metodo para crear un nuevo cliente 
  crearUser(usuario:Usuarios):Observable<Usuarios>
  {
    return this.http.post<Usuarios>(this.url,usuario)
  }

}
