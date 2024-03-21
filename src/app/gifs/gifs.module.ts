import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { ResultadosComponent } from './resultados/resultados.component';

@NgModule({
  declarations: [
    // Componentes que pertenecen a este módulo
    BusquedaComponent,
    GifsPageComponent,
    ResultadosComponent
  ],
  imports: [
    // Módulos necesarios para este módulo
    CommonModule
  ],
  exports: [
    // Componente que se exporta
    GifsPageComponent
  ]
})
export class GifsModule { }
