import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component'; // Componente de la barra de navegacion
import { SidebarComponent } from './sidebar/sidebar.component'; // Componente de la barra lateral

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule //
  ],
  exports: [
    NavbarComponent, 
    SidebarComponent 
  ]
})
export class SharedModule { } // Definicion del modulo SharedModule para compartir componentes
