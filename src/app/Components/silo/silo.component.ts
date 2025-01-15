import { Component } from '@angular/core';

@Component({
  selector: 'app-silo',
  templateUrl: './silo.component.html',
  styleUrls: ['./silo.component.css'],
})
export class SiloComponent {
  Name = 'Admin';

  isFormVisible = false;
  FormVisible() {
    this.isFormVisible = !this.isFormVisible;
  }
}
