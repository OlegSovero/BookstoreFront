import { Component } from '@angular/core';
import { BooksComponent } from '../books/books.component';

@Component({
  selector: 'app-home',
  imports: [BooksComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
