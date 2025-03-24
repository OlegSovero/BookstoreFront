import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderdetailComponent } from '../orderdetail/orderdetail.component';
import { OrdercustomerComponent } from '../ordercustomer/ordercustomer.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartFormService } from '../services/cartform.service';


@Component({
  selector: 'app-checkout',
  imports: [OrderdetailComponent, OrdercustomerComponent,CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  customer: any;
  total: number = 0;
  cartItems: any[] = [];
  isProcessing: boolean = false;  // Controla la visibilidad del modal
  isSuccess: boolean = false;  // Determina si la transacción fue exitosa
  isValid: boolean = false;  // Para habilitar el botón de "Proceder con la compra"

  
  constructor(private cartFormService: CartFormService, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    // Obtener los datos del cliente desde CartFormService
    this.cartFormService.getCustomerData().subscribe(data => {
      this.customer = data;
      this.validateCustomerData();  // Validar los datos cada vez que se reciben
    });

    // Suscribirse al estado de validación del formulario
    this.cartFormService.getValidationStatus().subscribe(isValid => {
      this.isValid = isValid;  // Actualizar el estado de validación
    });


    // Obtener los items del carrito desde CartService (o puedes usar el servicio adecuado)
    this.cartItems = [
      { id_book: 1, name: 'Libro 1', quantity: 2, precio: '50.25' },
      { id_book: 2, name: 'Libro 2', quantity: 1, precio: '70.00' }
    ];

    this.total = this.cartItems.reduce((acc, item) => acc + parseFloat(item.precio), 0);  // Calcular el total
  }


  validateCustomerData() {
    if (this.customer && this.customer.firstName && this.customer.lastName && this.customer.docNumber) {
      this.isValid = true;  // Habilitar el botón si los datos son válidos
    } else {
      this.isValid = false;  // Deshabilitar el botón si hay campos faltantes
    }
  }

  processPayment() {
    console.log("procesamiento de pago")
    console.log(this.customer)
    console.log("estado isProcessing")
    this.isProcessing = true;
    console.log("estado isProcessing")
    console.log(this.isProcessing)
    // Crear la carga útil para el POST
    const orderPayload = {
      doc_type: this.customer.docType,
      doc_number: this.customer.docNumber,
      first_name: this.customer.firstName,
      last_name: this.customer.lastName,
      phone: this.customer.phone,
      email: this.customer.email,
      total: this.total,
      items: this.cartItems.map(item => ({
        id_book: item.id_book,
        quantity: item.quantity,
        detail_price: item.precio
      }))
    };

    // Realizar el POST al API
    
    this.http.post('http://127.0.0.1:8000/api/ordertrans', orderPayload).subscribe(
      (response: any) => {
        this.isProcessing = true;
        this.isSuccess = true;
        console.log(response);
      },
      (error) => {
        this.isProcessing = false;
        this.isSuccess = false;
        console.error('Error al procesar el pago:', error);
      }
    );
    /*
   
    setTimeout(() => { // Simulando un retardo para ver el modal
      this.isProcessing = false;
      this.isSuccess = true; // El pago fue exitoso
    }, 2000);  // Simulación de 2 segundos de procesamiento
    */
  }

  goHome() {
    this.router.navigate(['/']);  // Redirigir al home
  }
}