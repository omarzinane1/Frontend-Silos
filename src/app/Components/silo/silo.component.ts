import { Component, OnInit } from '@angular/core';
import { ServiceSiloService } from 'src/app/services/service-silo.service';

@Component({
  selector: 'app-silo',
  templateUrl: './silo.component.html',
  styleUrls: ['./silo.component.css'],
})
export class SiloComponent implements OnInit {
  Name = 'Admin';
  silos: any[] = [];

  constructor(private service: ServiceSiloService) {}

  ngOnInit(): void {this.siloData()}
  siloData() {
    this.service.GetSilosData().subscribe({
      next: (res) => {
        this.silos = res;
      },
      error: (err) => {},
      complete: () => {},
    });
  }

  isFormVisible = false;
  FormVisible() {
    this.isFormVisible = !this.isFormVisible;
  }
}
