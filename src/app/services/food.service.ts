import { Injectable } from '@angular/core';
import { Food } from 'src/models/food';
import { Tag } from 'src/models/tag';
import { of, Observable } from 'rxjs';

export type TagMap = { [tag: string]: number };

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getById(id: number): Observable<Food | undefined> {
    return of(food.find((f) => f.id == id));
  }

  getAll(): Observable<Food[]> {
    return of(food);
  }
}

const food: Food[] = [
  {
    id: 1,
    name: 'burger',
    price: 20.0,
    tags: ['burger', 'fastfood'],
    favorite: false,
    imageUrl: 'assets/images/food/food-1.jpg',
  },
  {
    id: 2,
    name: 'pizza',
    price: 20.0,
    tags: ['pizza', 'fastfood'],
    favorite: true,
    imageUrl: 'assets/images/food/food-2.jpg',
  },
  {
    id: 3,
    name: 'cheesecake',
    price: 20.0,
    tags: ['cheesecake', 'dessert'],
    favorite: true,
    imageUrl: 'assets/images/food/food-3.jpg',
  },
  {
    id: 4,
    name: 'potato',
    price: 20.0,
    tags: ['potato'],
    favorite: false,
    imageUrl: 'assets/images/food/food-4.jpg',
  },
  {
    id: 5,
    name: 'caramel cake',
    price: 20.0,
    tags: ['caramel', 'dessert'],
    favorite: false,
    imageUrl: 'assets/images/food/food-5.jpg',
  },
  {
    id: 6,
    name: 'pasta',
    price: 20.0,
    tags: ['pasta', 'fastfood', 'spicy'],
    favorite: true,
    imageUrl: 'assets/images/food/food-6.jpg',
  },
];
