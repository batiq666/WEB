import { categories } from './all-products/mock-categories';
import { photosList } from './photos-list';
import { Photos } from './photos';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Category } from './category';
import { User } from './User';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const photos: Photos[] = [
            {
              id: 1,
              name: 'Man',
              imageLink: '../assets/img/01.jpg',
              price: '100',
              description: '1',
              category: 2,
              view: 10
          },
          {
              id: 2,
              name: '2',
              imageLink: '../assets/img/05.jpg',
              price: '200',
              description: '2',
              category: 3,
              view: 30
          },
          {
              id: 3,
              name: '3',
              imageLink: '../assets/img/11.jpg',
              price: '300',
              description: '3',
              category: 4,
              view: 50
          },

          {
            id: 4,
            name: 'Man',
            imageLink: '../assets/img/02.jpg',
            price: '100',
            description: '1',
            category: 2,
            view: 10
        },
        {
            id: 5,
            name: '2',
            imageLink: '../assets/img/03.jpg',
            price: '200',
            description: '2',
            category: 3,
            view: 30
        },
        {
            id: 6,
            name: '3',
            imageLink: '../assets/img/04.jpg',
            price: '300',
            description: '3',
            category: 4,
            view: 50
        },
        {
          id: 7,
          name: 'Man',
          imageLink: '../assets/img/06.jpg',
          price: '100',
          description: '1',
          category: 2,
          view: 10
      },
      {
          id: 8,
          name: '2',
          imageLink: '../assets/img/07.jpg',
          price: '200',
          description: '2',
          category: 3,
          view: 30
      },
      {
          id: 9,
          name: '3',
          imageLink: '../assets/img/08.jpg',
          price: '300',
          description: '3',
          category: 4,
          view: 50
      },
      {
        id: 10,
        name: 'Man',
        imageLink: '../assets/img/09.jpg',
        price: '100',
        description: '1',
        category: 2,
        view: 10
      },
      {
        id: 11,
        name: '2',
        imageLink: '../assets/img/10.jpg',
        price: '200',
        description: '2',
        category: 3,
        view: 30
      },
      {
        id: 12,
        name: '3',
        imageLink: '../assets/img/12.jpg',
        price: '300',
        description: '3',
        category: 4,
        view: 50
      },
          ];


    const categories: Category[] = [
      {
          id: 1,
          name: 'All',
          img: '../../assets/img/07.jpg'
      },
      {
          id: 2,
          name: 'People',
          img: '../../assets/img/01.jpg'
      },
      {
          id: 3,
          name: 'Places',
          img: '../../assets/img/05.jpg'
      },
      {
          id: 4,
          name: 'Things',
          img: '../../assets/img/10.jpg'
      }
  ];

    const users: User[] = [
    {
      username: 'admin',
      email: 'rakhat@gmail.com',
      password: 'admin'},
    {
        username: 'user',
        email: 'shyngys@gmail.com',
        password: 'user'
    }
  ];

    return {photos, categories, users};
}

  // genId(photos: Photos[]): number {
  //   return photos.length > 0 ? Math.max(...photos.map(photos => photos.id)) + 1 : 20;
  // }
}
