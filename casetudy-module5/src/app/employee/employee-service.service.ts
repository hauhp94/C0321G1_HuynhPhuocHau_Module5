import {Injectable} from '@angular/core';
import {Employee} from './employee';
import {Observable} from 'rxjs';
import {Customer} from '../customer/customer';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  API_URL = 'http://localhost:3000/employeeList';
  employeeList: Employee[];
  message: string;

  constructor(private httpClient: HttpClient) {
  }

  findById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(this.API_URL + '/' + id);
  }

  findAll(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.API_URL);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.patch<Employee>(this.API_URL + '/' + employee.id, employee);
    console.log('update ok: ' + employee.id);
  }
}
