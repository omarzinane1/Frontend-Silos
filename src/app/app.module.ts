import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './Components/hero/hero.component';
import { ExporterComponent } from './exporter/exporter.component';
import { SidebarComponent } from './Components/sidebar/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SiloComponent } from './Components/silo/silo.component';
import { ConsultationComponent } from './Components/consultation/consultation.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ExporterComponent,
    SidebarComponent,
    SiloComponent,
    ConsultationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    //JwtModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
