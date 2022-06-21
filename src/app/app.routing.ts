import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./components/login/login.component";
import { ForcesComponent } from "./components/forces/forces.component";
import { DatasheetComponent } from './components/datasheet/datasheet.component';
import { UnitsComponent } from './components/units/units.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: "home", component: HomeComponent },
    { path: "forces", component:ForcesComponent },
    { path: "units", component: UnitsComponent },
    { path: "datasheet", component: DatasheetComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
