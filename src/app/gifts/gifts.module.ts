import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftsPageComponent } from './gifts-page/gifts-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadoComponent } from './resultado/resultado.component';



@NgModule({
  declarations: [
    GiftsPageComponent,
    BusquedaComponent,
    ResultadoComponent
  ],
  exports: [
    GiftsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GiftsModule { }
