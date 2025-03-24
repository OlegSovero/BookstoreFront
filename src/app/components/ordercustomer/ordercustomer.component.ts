import { Component } from '@angular/core';
//import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
//import { PaymentProcessingModalComponent } from './payment-processing-modal.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ordercustomer',
  imports: [FormsModule],
  templateUrl: './ordercustomer.component.html',
  styleUrl: './ordercustomer.component.css'
})
export class OrdercustomerComponent {
  customer = {
    firstName: '',
    lastName: '',
    docType: 1,
    docNumber: '',
    email: '',
    phone: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    // Se pueden agregar más validaciones aquí
    if (this.isFormValid()) {
      const orderData = {
        doc_type: this.customer.docType,
        doc_number: this.customer.docNumber,
        first_name: this.customer.firstName,
        last_name: this.customer.lastName,
        phone: this.customer.phone,
        email: this.customer.email,
        total: 150.75, // Puede venir del servicio de carrito
        items: [
          { id_book: 1, quantity: 2, detail_price: 50.25 },
          { id_book: 2, quantity: 1, detail_price: 50.25 }
        ]
      };

      // Redirige al checkout pasando los datos de la orden (se puede hacer con un servicio o queryParams)
      this.router.navigate(['/checkout'], { queryParams: orderData });
    }
  }

  isFormValid() {
    // Aquí validas los campos obligatorios
    return this.customer.firstName && this.customer.lastName && this.customer.docNumber;
  }
}
