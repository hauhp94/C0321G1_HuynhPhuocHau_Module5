import {Customer} from './customer';

export interface Saving {
  id: number;
  customer: Customer;
  date: {
    dateOpen: string;
    dateStart: string;
  };
  period: string;
  deposit: number;
  rate: number;
  offer: string;
}
