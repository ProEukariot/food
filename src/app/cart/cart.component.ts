import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/models/cart';
import { CartService } from '../services/cart.service';
import { Food } from 'src/models/food';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public cart!: Cart;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  addItem(food: Food) {
    this.cartService.addToCart(food);
  }

  removeItem(id: number) {
    this.cartService.removeFromCart(id);
  }

  deleteItem(id: number) {
    this.cartService.deleteCartItem(id);
  }

  getTotal() {
    return this.cartService.getTotalPrice();
  }

  getItemsQuantity() {
    return this.cartService.getItemsCount();
  }
}
