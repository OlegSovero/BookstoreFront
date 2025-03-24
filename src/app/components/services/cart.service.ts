import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject = new BehaviorSubject<any[]>([]);  // Para manejar el estado del carrito
  public cart$ = this.cartSubject.asObservable();
  private isCartVisible = new BehaviorSubject<boolean>(false); // Estado de visibilidad del carrito


  getCartItems() {
    return this.cartSubject.asObservable();
  }

  addToCart(item: any) {
    const currentCart = this.cartSubject.value;
    this.cartSubject.next([...currentCart, item]);
  }

  removeFromCart(item: any) {
    const currentCart = this.cartSubject.value.filter(cartItem => cartItem.id_book !== item.id_book);
    this.cartSubject.next(currentCart);
  }

  toggleCart() {
    this.isCartVisible.next(!this.isCartVisible.value);
  }

  getCartVisibility() {
    return this.isCartVisible.asObservable();
  }

  getTotal() {
    return this.cartSubject.value.reduce((acc, item) => acc + (item.quantity * item.detail_price), 0);
  }
}
