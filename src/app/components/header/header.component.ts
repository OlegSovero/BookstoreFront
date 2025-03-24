import { Component, Input } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  toggleCart() {
    this.cartService.toggleCart();  // Llamada para mostrar u ocultar el carrito
  }
  

}
