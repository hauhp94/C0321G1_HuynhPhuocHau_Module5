import {Injectable} from '@angular/core';
import {Customer} from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  message: string;
  customerList: Customer[] = [{
    customerId: 123, typeCustomerId: 1, nameCustomer: 'Nguyen Bui Tung',
    dateOfBirthCustomer: '2000-12-12', idCardCustomer: '234456123', phoneCustomer: '0935123123',
    emailCustomer: 'kkk@gmail.com', addressCustomer: 'Da nang', codeCustomer: '234'
  }, {
    customerId: 321, typeCustomerId: 1, nameCustomer: 'Nguyen Van Minh',
    dateOfBirthCustomer: '2000-12-12', idCardCustomer: '234456123', phoneCustomer: '0935123123',
    emailCustomer: 'kkk@gmail.com', addressCustomer: 'Da nang', codeCustomer: '234'
  }, {
    customerId: 12, typeCustomerId: 1, nameCustomer: 'Nguyen Thi Lan',
    dateOfBirthCustomer: '2000-12-12', idCardCustomer: '234456123', phoneCustomer: '0935123123',
    emailCustomer: 'kkk@gmail.com', addressCustomer: 'Da nang', codeCustomer: '234'
  }, {
    customerId: 13, typeCustomerId: 1, nameCustomer: 'Nguyen Van Dung',
    dateOfBirthCustomer: '2000-12-12', idCardCustomer: '234456123', phoneCustomer: '0935123123',
    emailCustomer: 'kkk@gmail.com', addressCustomer: 'Da nang', codeCustomer: '234'
  }];

  constructor() {
  }

  findById(id: number) {
    return this.customerList.find(customer => customer.customerId === id);
    console.log('id in service: ' + id);
  }

  updateProduct(id: number, customer: any) {
    for (let i = 0; i < this.customerList.length; i++) {
      if (this.customerList[i].customerId === id) {
        this.customerList[i] = customer;
      }
    }
  }
}
