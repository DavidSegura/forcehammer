import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./components/login/login.component";
import { ForcesComponent } from "./components/forces/forces.component";

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: "force", component:ForcesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
