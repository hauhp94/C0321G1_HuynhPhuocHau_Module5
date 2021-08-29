import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HomeComponent } from './layout/home/home.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { ListServiceComponent } from './service/list-service/list-service.component';
import { ListCustomerUsingServiceComponent } from './customer/list-customer-using-service/list-customer-using-service.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreateEmployeeComponent} from './employee/create-employee/create-employee.component';
import {CreateServiceComponent} from './service/create-service/create-service.component';
import {CreateContractComponent} from './contract/create-contract/create-contract.component';
import {EditCustomerComponent} from './customer/edit-customer/edit-customer.component';
import {Router, RouterModule} from '@angular/router';
import {FuramaRoutingModule} from './furama-routing.module';
import { EditEmployeComponent } from './employee/edit-employe/edit-employe.component';
import { EditServiceComponent } from './service/edit-service/edit-service.component';
import { SearchCustomerComponent } from './customer/search-customer/search-customer.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
    declarations: [
        AppComponent,
        ListCustomerComponent,
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        HomeComponent,
        CreateCustomerComponent,
        ListEmployeeComponent,
        ListServiceComponent,
        ListCustomerUsingServiceComponent,
        CreateEmployeeComponent,
        CreateServiceComponent,
        CreateContractComponent,
        EditCustomerComponent,
        EditEmployeComponent,
        EditServiceComponent,
        SearchCustomerComponent,
    ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    FuramaRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
