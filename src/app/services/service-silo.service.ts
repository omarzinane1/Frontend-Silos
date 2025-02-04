import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../types/interface';

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
  //modifier les cheque
  updatesilo(id: number, silosUpdate: any): Observable<any> {
    return this.http.put(`${this.Api}update/${id}`, silosUpdate);
  }
  searchSilos(search: string): Observable<any> {
    return this.http.get(`${this.Api}search`, {
      params: { search },
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
  downloadPdf(startDate: string, endDate: string): Observable<Blob> {
    return this.http.get(
      `${this.Api}exportPDF?startDate=${startDate}&endDate=${endDate}`,
      { responseType: 'blob' }
    );
  }
  //export silos forma excl DFC
  exportSilos(dateReception1: string, dateReception2: string): void {
    const url = `${this.Api}ExporterDATA?startDate=${dateReception1}&endDate=${dateReception2}`;
    this.http.get(url, { responseType: 'blob' }).subscribe((blob) => {
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = 'silos.xlsx';
      a.click();
    });
  }

  //connexion
  //récuperation de donnée dans  le cas de  login
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();
  private tokenSubject = new BehaviorSubject<any>(null);
  token$ = this.tokenSubject.asObservable();
  setUser(user: any) {
    this.userSubject.next(user);
  }
  getUser() {
    return this.userSubject.value;
  }
  setToken(token: string) {
    this.tokenSubject.next(token);
  }
  getToken() {
    this.tokenSubject.value;
  }

  login(user: any): Observable<any> {
    return this.http.post<{ token: string }>(`${this.Api}login`, user);
  }
  // drop item par admin
  DropItems(id: number): Observable<any> {
    return this.http.delete(`${this.Api}deleteUser/${id}`);
  }
  getItems(): Observable<any> {
    return this.http.get(`${this.Api}showUser`);
  }
  addItem(user: User): Observable<any> {
    return this.http.post(`${this.Api}register`, user);
  }
  updateRoleByEmail(email: string, role: string) {
    return this.http.put(`${this.Api}updateRoleByEmail`, { email, role });
  }
}
