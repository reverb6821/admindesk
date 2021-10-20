import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//! layouts
import { MainComponent } from './layouts/main/main.component';
//! Components
import { DashboardComponent } from "./views/dashboard/dashboard.component"
const routes: Routes = [
    //! dashboard
  {
    path: "dashboard",
    component: MainComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      // { path: "settings", component: SettingsComponent },
      // { path: "tables", component: TablesComponent },
      // { path: "maps", component: MapsComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
