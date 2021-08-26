import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import {ListEmployeeComponent} from './employee/list-employee/list-employee.component';
import {CreateCustomerComponent} from './customer/create-customer/create-customer.component';
import {CreateEmployeeComponent} from './employee/create-employee/create-employee.component';
import {EditCustomerComponent} from './customer/edit-customer/edit-customer.component';

const routes: Routes = [
  {
    path: '',
    component: ListCustomerComponent
  },
  {
    path: 'customer/list',
    component: ListCustomerComponent
  },
  {
    path: 'customer/create',
    component: CreateCustomerComponent
  },
  {
    path: 'customer/edit/:id',
    component: EditCustomerComponent
  },
  {
    path: 'employee/list',
    component: ListEmployeeComponent
  },
  {
    path: 'employee/create',
    component: CreateEmployeeComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class FuramaRoutingModule { }
