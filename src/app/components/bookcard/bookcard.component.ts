import { Component, Input  } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bookcard',
  imports: [CommonModule],
  templateUrl: './bookcard.component.html',
  styleUrl: './bookcard.component.css'
})
export class BookcardComponent {
  @Input() book: any;

  showButton = false;  // Controla la visibilidad del botón "Agregar"

  constructor(private cartService: CartService) {}

  // Muestra el botón al pasar el mouse
  showAddButton() {
    this.showButton = true;
  }

  // Oculta el botón cuando el mouse sale
  hideAddButton() {
    this.showButton = false;
  }

  // Agrega el libro al carrito
  addToCart(book: any) {
    this.cartService.addToCart(book);  // Llama al servicio para agregar el libro
  }

}
