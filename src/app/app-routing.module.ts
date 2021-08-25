import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PaisesComponent } from './paises/paises.component';
import { TarifasComponent } from './tarifas/tarifas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FormComponent } from './vistas/form/form.component';


const routes: Routes = [
  {path:'',component:TarifasComponent},

    {path:'TarifaNueva',component:FormComponent},
    {path:'clientes',component:UsuariosComponent},
    {path:'paises',component:PaisesComponent}
    
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[FormComponent];
