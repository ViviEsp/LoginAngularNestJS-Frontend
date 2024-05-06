import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ListaProductComponent } from './product/lista-product.component';
import { NuevoProductComponent } from './product/nuevo-product.component';
import { DetalleProductComponent } from './product/detalle-product.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './user/login.component';
import { SingUpComponent } from './user/sing-up.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductComponent,
    NuevoProductComponent,
    DetalleProductComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    SingUpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
