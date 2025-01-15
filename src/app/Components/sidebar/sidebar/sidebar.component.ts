import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  //imageUrl: string = 'assets/images/gclogo.png';
  Menus: { icon: string; title: string; link: string }[] = [
    {
      icon: 'fa-house',
      title: 'Accueil',
      link: '/sidebar',
    },
    {
      icon: 'fa-circle-check',
      title: 'Silo',
      link: '/silo',
    },
    {
      icon: 'fa-cloud-arrow-down',
      title: 'Exportation',
      link: '/export',
    },
    {
      icon: 'fa-id-card',
      title: 'Consultation',
      link: '/consultation',
    },
    {
      icon: 'fa-right-from-bracket',
      title: 'Se déconnecter',
      link: '',
    },
  ];

  ngOnInit() {}

  sidebarVisible = true;
  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
  logout() {

  }
}
