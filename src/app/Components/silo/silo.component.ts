import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { debounceTime, distinctUntilChanged, Observable, Subject } from 'rxjs';
import { ServiceSiloService } from 'src/app/services/service-silo.service';
import { silo } from 'src/app/types/interface';

@Component({
  selector: 'app-silo',
  templateUrl: './silo.component.html',
  styleUrls: ['./silo.component.css'],
})
export class SiloComponent implements OnInit {
  silos: any[] = [];
  numsilo = '';
  produit = '';
  stocki = '';
  entre = '';
  consumation = '';
  searchQuery = '';
  anything: string = '';


  constructor(
    private service: ServiceSiloService,
    private toastr: ToastrService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.siloData();
  }
  user = this.service.getUser();
  //get data
  siloData() {
    this.service.GetSilosData().subscribe({
      next: (res) => {
        this.silos = res;
      },
      error: (err) => {},
      complete: () => {},
    });
  }
  //post data
  postSilo() {
    try {
      let silo = {
        silo: this.numsilo,
        produit: this.produit,
        stocki: this.stocki,
        entre: this.entre,
        consumation: this.consumation,
      };
      console.log('Données envoyées :', silo);

      this.service.createSilos(silo).subscribe({
        next: (res) => {
          if (res.status === 'success') {
            this.toastr.success('Opération réussie !', 'Succès');
            this.siloData();
          } else {
            this.toastr.error("Quelque chose s'est mal passé.", 'Erreur');
          }
        },
        error: (err) => {
          console.error('Erreur API :', err);
          this.toastr.error("Une erreur inattendue s'est produite.", 'Erreur');
        },
      });
    } catch (error) {
      console.error('Erreur critique :', error);
      this.toastr.error("Une erreur critique s'est produite.", 'Erreur');
    }
  }
  deleteSilo(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce silo ?')) {
      this.service.dropsilo(id).subscribe({
        next: () => {
          this.toastr.success('Silo supprimé avec succès !', 'Succès');
          this.siloData();
        },
        error: (err) => {
          this.toastr.error(err.message, 'Erreur');
        },
      });
    }
  }
  //search by any data
  performSearch(): void {
    this.service.searchSilos(this.searchQuery).subscribe(
      (response) => {
        this.silos = response.silo;
      },
      (error) => {
        this.toastr.error('Erreur lors de la recherche :', error);
      }
    );
  }

  obj: any = {};
  getElementObj(id: any): any {
    this.service.GetSilosData().subscribe((res: any) => {
      this.silos = res;
      this.silos.map((element) => {
        if (element.id == id) this.obj = element;
      });
    });
  }
  siloArray: any[] = [];
  getElement(id: any): any {
    this.service.GetSilosData().subscribe((res: any) => {
      this.siloArray = res;
      this.siloArray.map((element) => {
        if (element.id == id) return element;
      });
    });
  }
  updateSilo(id: any) {
    let Item = {
      silo: this.numsilo,
      produit: this.produit,
      stocki: this.stocki,
      entre: this.entre,
      consumation: this.consumation,
    };
    this.service.updatesilo(id, Item).subscribe(
      (updatedUser) => {
        this.siloArray = this.siloArray.filter((Item) => (Item.id = id));
        this.siloData();
        this.toastr.success(updatedUser.message, 'Succès');
      },
      (error) => {
        this.toastr.error(error.message, 'Erreur');
      }
    );
  }
  isFormVisibleUpdate: boolean = false;
  toggleFormUpdate() {
    this.isFormVisibleUpdate = !this.isFormVisibleUpdate;
  }

  isFormVisible = false;
  FormVisible() {
    this.isFormVisible = !this.isFormVisible;
  }
}
