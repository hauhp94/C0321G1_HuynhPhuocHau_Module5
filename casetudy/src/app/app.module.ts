import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './layout/home/home.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { CreateServiceComponent } from './service/create-service/create-service.component';
import { CreateContractComponent } from './contract/create-contract/create-contract.component';
import { CreateContractDetailComponent } from './contract-detail/create-contract-detail/create-contract-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    ListCustomerComponent,
    CreateCustomerComponent,
    EditCustomerComponent,
    CreateEmployeeComponent,
    CreateServiceComponent,
    CreateContractComponent,
    CreateContractDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
