import { CartItem } from './cart-item';
import { Food } from './food';

export class Cart {
  public cartItems: CartItem[] = [];

  public addToCart(item: Food) {
    const cartItem = this.cartItems.find(
      (cartItem) => cartItem.item.id == item.id
    );

    if (!cartItem) {
      const cartItemToPush = new CartItem();
      cartItemToPush.item = item;
      this.cartItems.push(cartItemToPush);
      return;
    }

    cartItem.quantity += 1;
  }

  public removeFromCart(id: number) {
    const cartItem = this.cartItems.find((cartItem) => cartItem.item.id == id);
    if (cartItem) {
      if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
        return;
      }
      this.cartItems = this.cartItems.filter(
        (cartItem) => cartItem.item.id != id
      );
    }
  }

  public deleteCartItem(id: number) {
    this.cartItems = this.cartItems.filter(
      (cartItem) => cartItem.item.id != id
    );
  }
}
