import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../vacancy';
import { VacanciesService } from '../vacancies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {

  vacancies: Vacancy[];

  constructor(private route: ActivatedRoute, private categoriesService: VacanciesService) { }

  ngOnInit(): void {
    this.getVacancies()
  }

  getVacancies(): void {
    const id = +this.route.snapshot.paramMap.get('companyId');
    this.categoriesService.getVacancies(id).subscribe( vacancies => this.vacancies = vacancies);
  }

}
