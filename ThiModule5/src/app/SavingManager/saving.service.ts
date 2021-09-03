import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Saving} from './saving';
import {HttpClient} from '@angular/common/http';
import {Customer} from './customer';

@Injectable({
  providedIn: 'root'
})
export class SavingService {
  API_URL = 'http://localhost:8080/api/savings';

  // API_URL_CUSTOMER = 'http://localhost:3000/customerList';


  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Saving[]> {
    return this.httpClient.get<Saving[]>(this.API_URL);
  }

  // findAllCustomer(): Observable<Customer[]> {
  //   return this.httpClient.get<Customer[]>(this.API_URL_CUSTOMER);
  // }

  findById(id: number): Observable<Saving> {
    return this.httpClient.get<Saving>(this.API_URL + '/' + id);
  }

  updateSaving(saving: Saving): Observable<any> {
    console.log(saving);
    return this.httpClient.put<Saving>(this.API_URL + '/' + saving.id, saving);
  }

  deleteById(id: number): Observable<any> {
    return this.httpClient.delete(this.API_URL + '/' + id);
  }

  searchAll(code: string, name: string): Observable<Saving[]> {
    return this.httpClient.get<Saving[]>(this.API_URL + '?id=' + code);
  }
}
