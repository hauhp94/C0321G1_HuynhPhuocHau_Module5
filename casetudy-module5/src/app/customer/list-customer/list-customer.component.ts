import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerList = [];

  constructor() {
    this.customerList.push({
      customerId: 222, typeCustomerId: 1, nameCustomer: 'Nguyen Van Tung',
      dateOfBirthCustomer: '2000-12-12', idCardCustomer: '234456123', phoneCustomer: '0935123123',
      emailCustomer: 'kkk@gmail.com', addressCustomer: 'Da nang', codeCustomer: 221
    });
    this.customerList.push({
      customerId: 333, typeCustomerId: 2, nameCustomer: 'Nguyen Van Hung',
      dateOfBirthCustomer: '2000-12-12', idCardCustomer: '234456123', phoneCustomer: '0935123123',
      emailCustomer: 'kkk@gmail.com', addressCustomer: 'Da Lat', codeCustomer: 221
    });
    this.customerList.push({
      customerId: 333, typeCustomerId: 2, nameCustomer: 'Nguyen Van Hung',
      dateOfBirthCustomer: '2000-12-12', idCardCustomer: '234456123', phoneCustomer: '0935123123',
      emailCustomer: 'kkk@gmail.com', addressCustomer: 'Da Lat', codeCustomer: 221
    });
    this.customerList.push({
      customerId: 333, typeCustomerId: 2, nameCustomer: 'Nguyen Van Hung',
      dateOfBirthCustomer: '2000-12-12', idCardCustomer: '234456123', phoneCustomer: '0935123123',
      emailCustomer: 'kkk@gmail.com', addressCustomer: 'Da Lat', codeCustomer: 221
    });
    this.customerList.push({
      customerId: 333, typeCustomerId: 2, nameCustomer: 'Nguyen Van Hung',
      dateOfBirthCustomer: '2000-12-12', idCardCustomer: '234456123', phoneCustomer: '0935123123',
      emailCustomer: 'kkk@gmail.com', addressCustomer: 'Da Lat', codeCustomer: 221
    });
  }

  ngOnInit(): void {
  }

}
