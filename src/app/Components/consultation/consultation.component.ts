import { Component } from '@angular/core';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css'],
})
export class ConsultationComponent {
  Role: any = '';
  searchParams = {
    numero_cheque: '',
    montant: '',
    date_reception: '',
    CIN: '',
    telephone: '',
    ville: '',
    banque: '',
    motif: '',
    statut: '',
  };
  cheques: any[] = [];

  statistiques = {
    chequesImpayes: 0,
    chequesPayes: 0,
    lignesObtenues: 0,
    montantMax: 0,
    montantMin: 0
  };

  activeIndex: number | null = null;
  toggleAccordion(index: number) {
    if (this.activeIndex === index) {
      this.activeIndex = null;
    } else {
      this.activeIndex = index;
    }
  }

  activeIndex2: number | null = null;
  toggleAccordion2(index: number) {
    if (this.activeIndex2 === index) {
      this.activeIndex2 = null;
    } else {
      this.activeIndex2 = index;
    }
  }
}
