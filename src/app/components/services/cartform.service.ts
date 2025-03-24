import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartFormService {

  private customerData = new BehaviorSubject<any>(null);  // Almacenamos la información del cliente
  private isValid = new BehaviorSubject<boolean>(false);

  // Obtener los datos del cliente
  getCustomerData() {
    return this.customerData.asObservable();
  }

  // Establecer los datos del cliente
  setCustomerData(data: any) {
    console.log(data)
    this.customerData.next(data);
  }

  // Obtener el estado de validación
  getValidationStatus() {
    return this.isValid.asObservable();
  }

  // Validar los datos del cliente
  validateCustomerData(customer: any) {
    // Validar los campos obligatorios
    if (customer.firstName && customer.lastName && customer.docNumber) {
      this.isValid.next(true);  // Habilitar el botón si los datos son válidos
    } else {
      this.isValid.next(false);  // Deshabilitar el botón si hay campos faltantes
    }
  }
  
}
