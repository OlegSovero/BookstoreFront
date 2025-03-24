import { Component, Input, OnInit } from '@angular/core';
//import { CartService } from '../services/cart.service';
import { ItemdetailcardComponent } from '../itemdetailcard/itemdetailcard.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orderdetail',
  imports: [CommonModule,ItemdetailcardComponent],
  templateUrl: './orderdetail.component.html',
  styleUrl: './orderdetail.component.css'
})
export class OrderdetailComponent implements OnInit{
  @Input() cartItems: any[] = [];
  total: number = 0;

  ngOnInit(): void {
    this.calculateTotal();
  }

  calculateTotal() {
    // Calcular el total en base a los items
    this.total = this.cartItems.reduce((acc, item) => acc + parseFloat(item.precio), 0);
  }
}
