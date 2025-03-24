import { Component } from '@angular/core';
//import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
//import { PaymentProcessingModalComponent } from './payment-processing-modal.component';
import { FormsModule } from '@angular/forms';
import { CartFormService } from '../services/cartform.service';

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

  constructor(private cartFormService: CartFormService, private router: Router) {}

  onSubmit() {
    // Guardar los datos del formulario en el CartFormService
    console.log(this.customer)
    this.cartFormService.setCustomerData(this.customer);

    this.cartFormService.validateCustomerData(this.customer);
    
    // Redirigir al CheckoutComponent
    this.router.navigate(['/checkout']);
  }

  isFormValid() {
    // Validar los campos obligatorios
    console.log(this.customer)
    return this.customer.firstName && this.customer.lastName && this.customer.docNumber;
  }
}
