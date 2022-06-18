import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { FormsModule } from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ForcesComponent } from './components/forces/forces.component';
import { DatasheetComponent } from './components/datasheet/datasheet.component';
import { UnitsComponent } from './components/units/units.component';

// Services
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForcesComponent,
    DatasheetComponent,
    UnitsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
