import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './Components/hero/hero.component';
import { ExporterComponent } from './exporter/exporter.component';
import { SidebarComponent } from './Components/sidebar/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SiloComponent } from './Components/silo/silo.component';
import { ConsultationComponent } from './Components/consultation/consultation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



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
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ timeOut: 5000,
    closeButton: true,
    progressBar: true,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
    toastClass: 'custom-toast', }),
    //JwtModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
