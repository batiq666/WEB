import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../category';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private route: ActivatedRoute, private categoriesService: CategoriesService) {}

  isToogled = true;

  categories: Category[];

  toggle() {
    this.isToogled = !this.isToogled;
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoriesService.getCategories().subscribe( categories => this.categories = categories);
  }
}

