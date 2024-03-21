import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  // Referencia al elemento de búsqueda en el HTML
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifsSvc: GifsService) { }

  /**
   * Método para realizar la búsqueda de gifs.
   * @param termino Término de búsqueda ingresado
   */
  buscar(termino: string) {
    // Obtener el valor del campo de búsqueda
    const valor = this.txtBuscar.nativeElement.value;

    // Verificar que el valor no esté vacío
    if (valor.trim().length === 0) {
      return; // Salir del método si el valor está vacío
    }

    // Llamar al servicio para buscar gifs
    this.gifsSvc.buscarGifs(valor);

    // Limpiar el campo de búsqueda después de la búsqueda
    this.txtBuscar.nativeElement.value = '';
  }

  /**
   * Método para limpiar el historial y los resultados de búsqueda.
   */
  limpiar() {
    // Eliminar datos del localStorage
    localStorage.removeItem('historial');
    localStorage.removeItem('resultados');

    // Recargar la página para cargar los cambios
    location.reload();
  }
}
