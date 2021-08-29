import { Injectable } from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categorys: Product[];
  API_URL = 'http://localhost:3000/categorys';
  constructor(private httpClient: HttpClient) {
  }
  findAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.API_URL);
  }
}
