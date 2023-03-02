import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AlertModule,SidebarModule } from '@coreui/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import containers
import {
  DefaultLayoutComponent,
} from './default-layout';
const APP_CONTAINERS = [
  DefaultLayoutComponent,
];

@NgModule({
  declarations: [
    AppComponent,...APP_CONTAINERS
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
