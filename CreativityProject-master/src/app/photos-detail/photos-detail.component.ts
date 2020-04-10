import { Component, OnInit } from '@angular/core';
import { Photos } from '../photos';
import { CategoriesService } from '../categories.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-photos-detail',
  templateUrl: './photos-detail.component.html',
  styleUrls: ['./photos-detail.component.css']
})
export class PhotosDetailComponent implements OnInit {

  selectedphotosId: string;
  photos: Photos;
  photosd: Photos[];
  isToggled = true;

  constructor(private route: ActivatedRoute,
              private categoriesService: CategoriesService,
              private location: Location,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.getPhoto();
  }

  toggle() {
    this.isToggled = !this.isToggled;
  }

  getPhoto(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoriesService.getPhoto(id)
      .subscribe(photos => this.photos = photos);
  }

  save(): void {
    this.categoriesService.updatePhoto(this.photos)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  delete(photo: Photos): void {
    this.photosd = this.photosd.filter(h => h !== photo);
    this.categoriesService.deletePhoto(photo).subscribe();
  }


  onAddToCart(photos: Photos): void {
    this.cartService.addPhotosToCart(photos);
  }

}
