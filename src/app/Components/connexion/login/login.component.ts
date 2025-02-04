import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceSiloService } from 'src/app/services/service-silo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  imageUrl: string = 'assets/images/usine.webp';
  email: string = '';
  password: string = '';

  constructor(
    private service: ServiceSiloService,
    private toastr: ToastrService,
    private router: Router,
  ) {}
  onSubmit() {
    let user = {
      email: this.email,
      password: this.password,
    };
    this.service.login(user).subscribe({
      next: (res) => {
        if (res.status == 'success' && res.token) {
          this.service.setUser(res.user);
          if (res.role != 'user') {
            this.router.navigate(['/Sidebar']);
            this.toastr.success("Connexion réussie",'Succès');
          } else {
            this.router.navigate(['/login']);
            console.log(res)
            this.toastr.error("Échec de la connexion. Veuillez vérifier vos identifiants.",'Erreur')
          }
        }
      },
      error: (err) => {
        this.toastr.error(err.message, 'Erreur');
      },
    });
  }
}
