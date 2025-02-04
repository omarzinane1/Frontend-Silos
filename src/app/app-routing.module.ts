import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './Components/hero/hero.component';
import { ExporterComponent } from './exporter/exporter.component';
import { SidebarComponent } from './Components/sidebar/sidebar/sidebar.component';
import { SiloComponent } from './Components/silo/silo.component';
import { LoginComponent } from './Components/connexion/login/login.component';


const routes: Routes = [
  {
    path: 'Sidebar',
    component: SidebarComponent,
    children: [
      { path: 'silo', component: SiloComponent },
      { path: '', component: HeroComponent },
      { path: 'export', component: ExporterComponent },
    ],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
