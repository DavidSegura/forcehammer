import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./components/login/login.component";
import { ForcesComponent } from "./components/forces/forces.component";
import { DatasheetComponent } from './components/datasheet/datasheet.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: "force", component:ForcesComponent },
    { path: "datasheet", component: DatasheetComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
