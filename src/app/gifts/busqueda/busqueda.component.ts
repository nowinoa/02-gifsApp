import { Component, ElementRef, ViewChild } from '@angular/core';
import { GiftsService } from 'src/app/gifts/services/giftServices/gifts-services.service';
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
 
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private giftsService: GiftsService) {
  }

  buscar() {
   const valor = this.txtBuscar.nativeElement.value;

   if (valor.trim().length === 0) {
    return;
   }
   this.giftsService.buscarGifts(valor);

   this.txtBuscar.nativeElement.value = '';
   }
  }