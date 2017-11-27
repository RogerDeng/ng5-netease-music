import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import 'polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { AppRoutingModule } from './app-routing.module';

import { ElectronService } from './providers/electron.service';
import { FullComponent } from './layouts/full/full.component';
import { DefaultComponent } from './layouts/default/default.component';
import { HeadComponent } from './components/head/head.component';
import { FootComponent } from './components/foot/foot.component';
import { SideComponent } from './components/side/side.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FullComponent,
    DefaultComponent,
    HeadComponent,
    FootComponent,
    SideComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule { }