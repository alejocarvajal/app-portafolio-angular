import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciodeFavoritosService {
  @Output() disparadorDeFavoritos: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
