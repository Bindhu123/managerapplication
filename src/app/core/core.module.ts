import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { DataService } from './service/data.service';
import { AuthService } from './service/auth.service';

@NgModule({
  declarations: [NavbarComponent],
  exports:[NavbarComponent],
  imports: [
    CommonModule
  ],
  providers: [DataService,AuthService],
})
export class CoreModule { }
