import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductComponent } from './product/lista-product.component';
import { DetalleProductComponent } from './product/detalle-product.component';
import { NuevoProductComponent } from './product/nuevo-product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login.component';
import { SingUpComponent } from './user/sing-up.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'lista', component: ListaProductComponent},
  {path: 'detalle/:id', component: DetalleProductComponent},
  {path: 'nuevo', component: NuevoProductComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: SingUpComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
