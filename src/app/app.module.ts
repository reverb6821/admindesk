import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//* partials
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { SidebarComponent } from './components/partials/sidebar/sidebar.component';
//* components
import { HomeStatsComponent } from './components/home/home-stats/home-stats.component';
import { CardsComponent } from './components/shared/cards/cards.component';
//* layouts
import { MainComponent } from './layouts/main/main.component';
//* views
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LineChartCardComponent } from './components/home/line-chart-card/line-chart-card.component';
import { BarChartCardComponent } from './components/home/bar-chart-card/bar-chart-card.component';
import { TodoComponent } from './components/home/todo/todo.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    HomeStatsComponent,
    CardsComponent,
    DashboardComponent,
    MainComponent,
    LineChartCardComponent,
    BarChartCardComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
