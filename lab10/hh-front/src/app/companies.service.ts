import { Injectable } from '@angular/core';
import { Company, LoginResponse } from './company';
import {Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient) { }

    getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>('http://127.0.0.1:8000/api/companies')
    // return this.http.get<Company[]>(this.categoriesUrl);
  }

  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`http://127.0.0.1:8000/api/login` , {
      username,
      password
    })
  }
}
