import { Component } from '@angular/core';
import { GiftsService } from '../services/giftServices/gifts-services.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  
})
export class ResultadoComponent  {

  get resultados() {
    return this.GiftsService.resultados;
  }

  constructor( private GiftsService: GiftsService) {}


}
