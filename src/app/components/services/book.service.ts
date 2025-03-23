import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Book {
  id_book: number;
  isbn: string;
  name: string;
  stock: number;
  precio: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'http://127.0.0.1:8000/api/book'; // Reemplaza esto con la URL de tu API

  constructor(private http: HttpClient) { }

  getBooks(): Observable<{ books: Book[], status: number }> {
    return this.http.get<{ books: Book[], status: number }>(this.apiUrl);
  }
}
