import { JogoVelhaModule } from './jogovelha';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JogoVelhaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
