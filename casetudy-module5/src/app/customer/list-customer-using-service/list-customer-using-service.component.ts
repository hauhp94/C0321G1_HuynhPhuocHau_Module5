import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-customer-using-service',
  templateUrl: './list-customer-using-service.component.html',
  styleUrls: ['./list-customer-using-service.component.css']
})
export class ListCustomerUsingServiceComponent implements OnInit {
  contractList = [];

  constructor() {
    this.contractList.push({
      idContract: 123,
      idEmployee: 3,
      idCustomer: 5,
      idService: 2,
      dateStart: '2020-12-12',
      dateEnd: '2021-10-10',
      deposit: 534222,
      totalMoney: 8000000,
    });
  }

  ngOnInit(): void {
  }

}
