import { Component, OnInit } from '@angular/core';
import { BooksComponent } from '../books/books.component';
import { CartComponent } from '../cart/cart.component';
import { HeaderComponent } from '../header/header.component';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';

//import { provideHttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  imports: [HeaderComponent,BooksComponent,CartComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  cartItems: any[] = [];  // items del carrito
  cartVisible: boolean = false;
  

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });

    this.cartService.getCartVisibility().subscribe(visible => {
      this.cartVisible = visible;
    });
    

  }

  // Nos suscribimos a la visibilidad del carrito
  

}
