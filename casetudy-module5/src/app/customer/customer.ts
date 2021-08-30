import {CustomerType} from './customer-type';

export interface Customer {
  id: number;
  customerType: CustomerType;
  nameCustomer: string;
  dateOfBirthCustomer: string;
  idCardCustomer: string;
  phoneCustomer: string;
  emailCustomer: string;
  addressCustomer: string;
  codeCustomer: string;
}


