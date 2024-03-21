import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

const URL = environment.url_server;
const APIKEY = environment.api_key;

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _historial: string[] = [];
  resultados: Gif[] = [];

  // Propiedad  para obtener una copia del historial de busqueda
  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    // Inicializar el historial y los resultados desde el almacenamiento local
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  /**
   * Método para buscar gifs en la API de Giphy.
   * @param query Termino de busqueda para gifs.
   */
  buscarGifs(query: string = '') {
    // Limpiar y formatear el término de busqueda
    query = query.trim().toLowerCase();

    // Agregar el término de búsqueda al historial si es nuevo
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10); // Limitar a 10 elementos en el historial
      localStorage.setItem('historial', JSON.stringify(this._historial)); // Guardar historial en el almacenamiento local
    }

    // Parametros de la consulta para la busqueda de gifs
    const params = new HttpParams()
      .set('api_key', APIKEY)
      .set('limit', '20') // Limitar a 10 resultados 
      .set('q', query);

    // Realizar la consulta para obtener los gifs
    this.http.get<SearchGifsResponse>(`${URL}`, { params }).subscribe(res => {
      this.resultados = res.data; // Asignar los resultados de la búsqueda
      localStorage.setItem('resultados', JSON.stringify(this.resultados)); // Guardar resultados en el almacenamiento local
    });
  }
}
