import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderdetailComponent } from '../orderdetail/orderdetail.component';
import { OrdercustomerComponent } from '../ordercustomer/ordercustomer.component';

@Component({
  selector: 'app-checkout',
  imports: [OrderdetailComponent, OrdercustomerComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  total: number = 0;  // Inicializado con 0
  cartItems: any[] = [];  // Inicializado con un array vacío

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params)
      this.total = params['total'];
      this.cartItems = params['cartItems'] ? JSON.parse(params['cartItems']) : [];
    });
  }

  processPayment() {
    // Aquí iría la lógica para hacer la solicitud POST al API
    console.log('Processing payment for order...');
  }
}