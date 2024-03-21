import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module'; 
import { GifsModule } from './gifs/gifs.module'; // Modulo especifico para funcionalidad de gifs
import { HttpClientModule } from '@angular/common/http'; // Modulo para realizar peticiones HTTP

import { AppComponent } from './app.component'; // Componente principal de la aplicacion

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    SharedModule,
    GifsModule, 
    HttpClientModule 
  ],
  providers: [], // Proveedores de servicios de la aplicacion
  bootstrap: [AppComponent] // Componente raiz de la aplicacion
})
export class AppModule { } 
