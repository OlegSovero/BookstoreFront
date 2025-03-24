import { Component, OnInit  } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  cartVisible: boolean = false;
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });

    this.cartService.getCartVisibility().subscribe(visible => {
      this.cartVisible = visible;
    });
  }

  // Calcula el total del carrito
  calculateTotal() {
    this.total = this.cartItems.reduce((acc, item) => acc + parseFloat(item.precio), 0);
  }

  // Cierra el carrito (puedes usar el servicio para alternar la visibilidad)
  closeCart() {
    this.cartService.toggleCart();  // Alterna la visibilidad del carrito
    console.log(this.cartItems)
    console.log(this.total)
  }

  // Elimina un item del carrito
  removeFromCart(item: any) {
    this.cartService.removeFromCart(item);
  }

  get cartItemsAsString(): string {
    return JSON.stringify(this.cartItems);
  }
  
}
