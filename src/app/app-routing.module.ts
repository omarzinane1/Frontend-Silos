import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './Components/hero/hero.component';
import { ExporterComponent } from './exporter/exporter.component';
import { SidebarComponent } from './Components/sidebar/sidebar/sidebar.component';
import { SiloComponent } from './Components/silo/silo.component';

const routes: Routes = [
  {
    path: '',
    component: SidebarComponent,
    children: [
      { path: 'silo', component: SiloComponent },
      { path: 'hero', component: HeroComponent },
      { path: 'export', component: ExporterComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
