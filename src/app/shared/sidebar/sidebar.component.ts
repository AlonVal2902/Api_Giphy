import { Component } from '@angular/core';
import { GifsService } from 'src/app/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  // Metodo para obtener el historial de busqueda del servicio
  get historial() {
    return this.gifsSvc.historial;
  }

  constructor(private gifsSvc: GifsService) { }

  /**
   * Metodo para buscar gifs al hacer clic en un elemento del historial
   * @param termino Termino de busqueda 
   */
  buscar(termino: string) {
    this.gifsSvc.buscarGifs(termino);
  }
}
