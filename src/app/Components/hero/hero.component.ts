import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServiceSiloService } from 'src/app/services/service-silo.service';
import { Item, User } from 'src/app/types/interface';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  tital: string = 'GESTION';
  items: Item[] = [];
  Role: any = '';
  name: string = '';
  email: string = '';
  password: string = '';
  selectedRole: string = '';

  constructor(
    private service: ServiceSiloService,
    private toastr: ToastrService
  ) {}
  user = this.service.getUser();
  ngOnInit(): void {
    this.getAllUser();
  }
  // data for all costmers
  getAllUser() {
    this.service.getItems().subscribe((data: Item[]) => {
      this.items = data;
      console.log(this.items);
    });
  }

  isVisible: boolean = false;
  formVisible() {
    this.isVisible = !this.isVisible;
  }
  isFormRoleVisible: boolean = false;
  formRoleVisible() {
    this.isFormRoleVisible = !this.isFormRoleVisible;
  }
  //for accordion
  activeIndex: number | null = 1;
  toggle(index: number) {
    if (this.activeIndex === index) {
      this.activeIndex = null;
    } else {
      this.activeIndex = index;
    }
  }
  addUser() {
    let userData: User = {
      name: this.name,
      email: this.email,
      password: this.password,
    };
    this.service.addItem(userData).subscribe({
      next: () => {
        this.toastr.success('Utilisateur ajouter avec succès', 'Succès');
        this.getAllUser();
      },
      error: (err) => {
        this.toastr.error("Erreur lors de la création de l'utilisateur", err);
      },
    });
  }
  onDeleteUser(userId: number) {
    const confirmed = window.confirm(
      'Êtes-vous sûr de vouloir supprimer cet utilisateur ?'
    );

    if (confirmed) {
      this.service.DropItems(userId).subscribe({
        next: () => {
          this.items = this.items.filter((Item) => Item.id !== userId);
          this.toastr.success('Utilisateur supprimé avec succès', 'Succès');
        },
        error: (err) => {
          this.toastr.error(
            "Erreur lors de la suppression de l'utilisateur",
            'Erreur'
          );
          console.error("Erreur lors de la suppression de l'utilisateur :");
        },
      });
    }
  }
  onUpdateRole() {
    if (this.email && this.selectedRole) {
      this.service.updateRoleByEmail(this.email, this.selectedRole).subscribe({
        next: (res) => {
          this.toastr.success('Le rôle a été mis à jour avec succès');
          this.getAllUser();
        },
        error: () => {
          this.toastr.error('Erreur lors de la mise à jour du rôle');
        },
      });
    } else {
      this.toastr.warning('Veuillez remplir tous les champs');
    }
  }
}
