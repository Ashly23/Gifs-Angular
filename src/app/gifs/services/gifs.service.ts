import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey: string = 'fCwnrhuKj5D7a24VONC8IHzIrI8hrYZC';
  private _historial: string[] = [];

  get historial() {

    return [...this._historial];
  }

  //insertar - busqueda
  buscarGifs( query: string = '') {
    
    //---TRIM--- ahorra espacios
    query = query.trim().toLocaleLowerCase();

   if( !this._historial.includes( query ) )  {
    //si no existe se incerta
    this._historial.unshift( query );
    //solo permite que se guarden 10
    this._historial = this._historial.splice( 0,10 );
   }

    fetch 
  }
}
