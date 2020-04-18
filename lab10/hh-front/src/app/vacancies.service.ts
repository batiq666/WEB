import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Vacancy } from './vacancy';

@Injectable({
  providedIn: 'root'
})
export class VacanciesService {

  constructor(private http: HttpClient) { }

  url = "http://127.0.0.1:8000/api/companies"
  getVacancies(id: number): Observable<Vacancy[]> {
    const url = `${this.url}/${id}/vacancies`
    return this.http.get<Vacancy[]>(url)
  }
}
