import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Photos } from '../photos';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {

  photos: Photos[];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
  }


  add(name: string, description: string, price: string, imageLink: string): void {
    name = name.trim();
    description = description.trim();
    price = price.trim();
    imageLink = 'F:\Images\Walpapers\\' + imageLink;
    imageLink = imageLink.trim();
    if (!name) { return; }
    if (!description) { return; }
    if (!price) { return; }
    if (!imageLink) { return; }
    this.categoriesService.addPhoto({ name, description, price, imageLink } as Photos)
      .subscribe(photo => {
        this.photos.push(photo);
      });
  }
}
