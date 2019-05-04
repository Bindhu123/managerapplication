import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from '../shared/pipes/capitalize.pipe';


@NgModule({
  declarations: [CapitalizePipe],
  imports: [
    CommonModule
  ],
  exports:[CapitalizePipe]
})
export class SharedModule { }