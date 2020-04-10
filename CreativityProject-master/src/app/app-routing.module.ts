import { AddPhotoComponent } from './add-photo/add-photo.component';
import { CategoriesDetailComponent } from './categories-detail/categories-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { CartComponent } from './cart/cart.component';
import { PhotosDetailComponent } from './photos-detail/photos-detail.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/:id', component: CategoriesDetailComponent },
  { path: 'photos', component: PhotosListComponent },
  { path: 'photos/:id', component: PhotosDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'add', component: AddPhotoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
