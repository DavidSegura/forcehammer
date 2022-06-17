import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ForcesComponent } from './components/forces/forces.component';
import { DatasheetComponent } from './components/datasheet/datasheet.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForcesComponent,
    DatasheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
