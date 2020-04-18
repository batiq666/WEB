import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompaniesService } from '../companies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  companies: Company[];

  constructor(private route: ActivatedRoute, private categoriesService: CompaniesService) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(): void {
    this.categoriesService.getCompanies().subscribe( companies => this.companies = companies);
  }

}
