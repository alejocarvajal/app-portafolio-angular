import { Component, OnInit } from '@angular/core';
import { ServiciodeFavoritosService } from '../serviciode-favoritos.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private servicioFavorito: ServiciodeFavoritosService) { }
  public listdeVideos:Array<any> =[]

  ngOnInit(): void {
    this.servicioFavorito.disparadorDeFavoritos.subscribe(data => {
      console.log('Recibiendo data...',data);
      this.listdeVideos.push(data);

    })
  }

}
