import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[];
  API_URL = 'http://localhost:3000/productlist';

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API_URL);
  }

  saveProduct(product: Partial<Product>): Observable<Product> {
    return this.httpClient.post(this.API_URL, product);
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(product => {
      return product.id !== id;
    });
  }

  findById(id: number) {
    return this.products.find(product => product.id === id);
  }

  updateProduct(id: number, product: Product) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products[i] = product;
      }
    }
  }

}
