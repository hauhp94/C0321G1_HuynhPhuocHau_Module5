import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import {ListEmployeeComponent} from './employee/list-employee/list-employee.component';
import {CreateCustomerComponent} from './customer/create-customer/create-customer.component';
import {CreateEmployeeComponent} from './employee/create-employee/create-employee.component';
import {EditCustomerComponent} from './customer/edit-customer/edit-customer.component';
import {EditEmployeComponent} from './employee/edit-employe/edit-employe.component';
import {ListServiceComponent} from './service/list-service/list-service.component';
import {EditServiceComponent} from './service/edit-service/edit-service.component';
import {CreateServiceComponent} from './service/create-service/create-service.component';

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
  },
  {
    path: 'employee/edit/:id',
    component: EditEmployeComponent
  },
  {
    path: 'service/list',
    component: ListServiceComponent
  },
  {
    path: 'service/create',
    component: CreateServiceComponent
  },
  {
    path: 'service/edit/:id',
    component: EditServiceComponent
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
