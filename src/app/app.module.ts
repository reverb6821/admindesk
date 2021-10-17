import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { RemixIconModule } from "angular-remix-icon";
import { RiComputerLine, RiNotificationLine,RiCompassLine, RiChat1Line, RiSearch2Line, RiAlignCenter, RiDashboard3Line, RiServerLine, RiArrowDownSLine, RiTableLine, RiBarChart2Line, RiAncientGateLine, RiUserLine, RiInformationLine, RiMailSendLine, RiContactsBook2Line, RiLoginCircleLine, RiForbidLine, RiFileLine, RiCheckboxBlankCircleLine } from 'angular-remix-icon';

import { NavbarComponent } from './components/partials/navbar/navbar.component';

const icons = {
  RiComputerLine, RiNotificationLine,RiCompassLine, RiChat1Line, RiSearch2Line,RiAlignCenter, RiDashboard3Line,RiServerLine,RiArrowDownSLine, RiTableLine, RiBarChart2Line, RiAncientGateLine, RiUserLine, RiInformationLine, RiMailSendLine, RiContactsBook2Line, RiLoginCircleLine, RiForbidLine, RiFileLine, RiCheckboxBlankCircleLine          
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RemixIconModule.configure(icons),
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
