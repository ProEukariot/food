import { Injectable } from '@angular/core';
import { Cart } from 'src/models/cart';
import { Food } from 'src/models/food';
import { FoodService } from './food.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart!: Cart;

  constructor(private foodService: FoodService) {
    if (!this.cart) this.cart = new Cart();
  }

  public getCart() {
    return this.cart;
  }

  public addToCart(food: Food) {
    this.cart.addToCart(food);
  }

  public removeFromCart(id: number) {
    this.cart.removeFromCart(id);
  }

  public deleteCartItem(id: number) {
    this.cart.deleteCartItem(id);
  }

  public getTotalPrice() {
    return this.cart.cartItems.reduce((acc, curr) => {
      const positionPrice = curr.quantity * curr.item.price;
      return acc + positionPrice;
    }, 0);
  }

  public getItemsCount() {
    return this.cart.cartItems.reduce((acc, curr) => {
      return curr.quantity + acc;
    }, 0);
  }
}
