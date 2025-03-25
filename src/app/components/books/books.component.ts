import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { CommonModule } from '@angular/common';
import { BookcardComponent } from "../bookcard/bookcard.component"; 
import { FormsModule } from '@angular/forms';

interface Book {
  id_book: number;
  isbn: string;
  name: string;
  stock: number;
  precio: string;
}

@Component({
  selector: 'app-books',
  imports: [CommonModule, BookcardComponent,FormsModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  searchTerm: string = '';
  filteredBooks: any[] = [];  // Lista de libros filtrados
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(response => {
      this.books = response.books;
      this.filteredBooks = this.books
      console.log(this.books); // Verifica si los datos se reciben correctamente
    });
  }

  // Filtrar libros por nombre o ISBN
  searchBooks(): void {
    const term = this.searchTerm.toLowerCase();  // Convertir a minúsculas para no hacer distinción entre mayúsculas/minúsculas
    this.filteredBooks = this.books.filter(
      book =>
        book.name.toLowerCase().includes(term) || book.isbn.includes(term)  // Buscar por nombre o ISBN
    );
  }
}
