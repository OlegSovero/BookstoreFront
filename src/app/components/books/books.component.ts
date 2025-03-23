import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { CommonModule } from '@angular/common';
import { BookcardComponent } from "../bookcard/bookcard.component"; // Asegúrate de importar CommonModule

interface Book {
  id_book: number;
  isbn: string;
  name: string;
  stock: number;
  precio: string;
}

@Component({
  selector: 'app-books',
  imports: [CommonModule, BookcardComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(response => {
      this.books = response.books;
      console.log(this.books); // Verifica si los datos se reciben correctamente
    });
  }
}
