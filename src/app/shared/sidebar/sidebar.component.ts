import { Component, ElementRef } from '@angular/core';
import { GiftsService } from 'src/app/gifts/services/giftServices/gifts-services.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  get historial() {
    return this.GiftsService.historial;
  }

  constructor(private GiftsService: GiftsService) { }

  buscar(termino: string){
    this.GiftsService.buscarGifts( termino )
  }
 
}
