import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-itemdetailcard',
  imports: [],
  templateUrl: './itemdetailcard.component.html',
  styleUrl: './itemdetailcard.component.css'
})
export class ItemdetailcardComponent {
  @Input() item: any;  // Recibe los datos de cada item del carrito

}
