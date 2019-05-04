import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './approuting.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module'; 
import { DataService } from './core/service/data.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CoreModule,
    LoginModule,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
