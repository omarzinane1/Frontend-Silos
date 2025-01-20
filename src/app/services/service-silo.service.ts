import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceSiloService {
  private Api = 'http://127.0.0.1:8000/api/';
  constructor(private http: HttpClient) {}

  GetSilosData(): Observable<any> {
    return this.http.get(`${this.Api}silos`);
  }
  createSilos(silos: any): Observable<any> {
    return this.http.post<any>(`${this.Api}store`, silos);
  }
  dropsilo(id: number) {
    return this.http.delete(`${this.Api}deleteSilo/${id}`);
  }
  searchSilos(search: string): Observable<any> {
    return this.http.get(`${this.Api}search`, {
      params: { search }
    });
  }
  getFilteredData(
    dateReception1: string,
    dateReception2: string
  ): Observable<any> {
    return this.http.get(
      `${this.Api}filter?startDate=${dateReception1}&endDate=${dateReception2}`
    );
  }
   // la service pour genere une file pdF
   downloadPdf(
    startDate: string,
    endDate: string
  ): Observable<Blob> {
    return this.http.get(
      `${this.Api}exportPDF?startDate=${startDate}&endDate=${endDate}`,
      { responseType: 'blob' }
    );
  }
   //export silos forma excl DFC
   exportSilos(
    dateReception1: string,
    dateReception2: string
  ): void {
    const url = `${this.Api}ExporterDATA?startDate=${dateReception1}&endDate=${dateReception2}`;
    this.http.get(url, { responseType: 'blob' }).subscribe((blob) => {
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = 'silos.xlsx';
      a.click();
    });
  }
}
