import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GiftsService {

  private apiKey: string = 'bwkcwQoQyhiTnOvIwObYNaCs5r1QoW68';
  private _historial: string[] = [];
  private servicioUrl: string = 'http://api.giphy.com/v1/gifs';
  public resultados: Gif[] = [];


  get historial() {
     return [...this._historial]
  }

  constructor(private http: HttpClient) {
    // if( localStorage.getItem('historial')) {
    //   this._historial = JSON.parse( localStorage.getItem('historial')!)
    // }
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  buscarGifts(query: string = '') {
    query = query.trim().toLocaleLowerCase();

    if( !this._historial.includes( query )) {
    this._historial.unshift( query );
    this._historial = this._historial.splice(0,10);
    localStorage.setItem('historial', JSON.stringify(this._historial));
  };

  const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', query)
    
  this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, {params})
     .subscribe( (resp ) => {
      console.log(resp.data);
      this.resultados = resp.data;
      localStorage.setItem('resultados', JSON.stringify(this.resultados));
    
    })
  }
}
