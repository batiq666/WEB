import { photosList } from './photos-list';
import { Injectable } from '@angular/core';
import { Category } from './category';
import { categories } from './all-products/mock-categories';
import {Observable, of} from 'rxjs';
import { Photos } from './photos';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  photos = photosList;

  constructor(private http: HttpClient) { }
  private photosUrl = 'api/photos';  // URL to web api
  private categoriesUrl = 'api/categories';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getCategory(id: number): Observable<Category> {
    const url = `${this.categoriesUrl}/${id}`;
    return this.http.get<Category>(url).pipe(
    catchError(this.handleError<Category>(`getCategory id=${id}`))
  );
  }

  getPhotos(): Observable<Photos[]> {
    return this.http.get<Photos[]>(this.photosUrl)
    .pipe(
      catchError(this.handleError<Photos[]>('getPhotos', []))
    );
  }

  getPhoto(id: number): Observable<Photos> {
    const url = `${this.photosUrl}/${id}`;
    return this.http.get<Photos>(url).pipe(
      catchError(this.handleError<Photos>(`getPhoto id=${id}`))
    );
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl);
  }

  getPhotoofC(id: number): Observable<Photos[]> {
    return of(this.photos.filter(photo => photo.category === id));
  }

  updatePhoto(photo: Photos): Observable<any> {
    return this.http.put(this.photosUrl, photo, this.httpOptions).pipe(
      catchError(this.handleError<any>('updatephoto'))
    );
  }

  addPhoto(photo: Photos): Observable<Photos> {
    return this.http.post<Photos>(this.photosUrl, photo, this.httpOptions).pipe(
      catchError(this.handleError<Photos>('addPhoto'))
    );
  }

  deletePhoto(photo: Photos | number): Observable<Photos> {
    const id = typeof photo === 'number' ? photo : photo.id;
    const url = `${this.photosUrl}/${id}`;

    return this.http.delete<Photos>(url, this.httpOptions).pipe(
      catchError(this.handleError<Photos>('deletePhoto'))
    );
  }

  searchPhotos(term: string): Observable<Photos[]> {
    if (!term.trim()) {
      // if not search term, return empty photo array.
      return of([]);
    }
    return this.http.get<Photos[]>(`${this.photosUrl}/?name=${term}`).pipe(
      catchError(this.handleError<Photos[]>('searchphotos', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

    console.error(error);

    return of(result as T);
    };
  }

}
