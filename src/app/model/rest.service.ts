import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category.model';
import { Product } from './product.model';

@Injectable()
export class RestService {
  
  url:String = "http://localhost:3021/"

  constructor(private http: HttpClient) { }
  
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url + 'products');
  }

  getAllCategories():Observable<Category[]> {
    return this.http.get<Category[]>(this.url + 'categories')
  }
}
