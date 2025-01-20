import { Component, OnInit } from '@angular/core';
import { ServiceSiloService } from '../services/service-silo.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-exporter',
  templateUrl: './exporter.component.html',
  styleUrls: ['./exporter.component.css']
})
export class ExporterComponent implements OnInit {
  dateReception1:any = '';
  dateReception2:any = '';
  silos:any[]=[];
  constructor(private service: ServiceSiloService,private toster:ToastrService){}
  ngOnInit(): void {
      this.getSilos();
  }
  getSilos(){
    this.service.GetSilosData().subscribe((res: any) => {
      this.silos = res
      this.silos.splice(res, 1);
    })
  }
  getFilteredData() {
    const dateReception1 = this.dateReception1;
    const dateReception2 = this.dateReception2;

    this.service
      .getFilteredData(dateReception1, dateReception2)
      .subscribe(
        (res: any) => {
          this.silos = res;
        },
        (error) => {
          this.toster.error("Erreur lors de la récupération des données filtrées:", error);
        }
      );
  }
  downloadPdf() {
    const dateReception1 = this.dateReception1;
    const dateReception2 = this.dateReception2;

    this.service
      .downloadPdf(dateReception1, dateReception2)
      .subscribe(
        (pdfBlob) => {
          const blob = new Blob([pdfBlob], { type: "application/pdf" });
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "Silos.pdf";
          a.click();
          window.URL.revokeObjectURL(url);
        },
        (error) => {
          this.toster.error("Erreur lors du téléchargement du PDF:", error);
        }
      );
  }
  exportChequesTOExcel(){
    const dateReception1 = this.dateReception1;
    const dateReception2 = this.dateReception2;
    this.service.exportSilos(dateReception1, dateReception2);
  }

}
