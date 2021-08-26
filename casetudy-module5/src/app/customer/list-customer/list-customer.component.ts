import {Component, OnInit} from '@angular/core';
import {Customer} from '../customer';
import {CustomerServiceService} from '../customer-service.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  message: string;
  customerList: Customer[];

  constructor(private customerServiceService: CustomerServiceService) {
    this.customerList = customerServiceService.customerList;
    this.message = customerServiceService.message;
  }

  ngOnInit(): void {
  }

}
