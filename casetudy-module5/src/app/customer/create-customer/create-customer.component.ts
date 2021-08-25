import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  createCustomerForm = new FormGroup({
    customerId: new FormControl('', Validators.required ),
    typeCustomerId: new FormControl('', Validators.required),
    nameCustomer: new FormControl('', Validators.required),
    dateOfBirthCustomer: new FormControl('', Validators.required),
    idCardCustomer: new FormControl('', Validators.required),
    phoneCustomer: new FormControl('', [Validators.required, Validators.pattern('^(09[0,1]\\d{7})$|^(\\(84\\)9[0,1]\\d{7})$')]),
    emailCustomer: new FormControl('', [Validators.required, Validators.email]),
    addressCustomer: new FormControl('', Validators.required),
    codeCustomer: new FormControl('', [Validators.required, Validators.pattern('KH-\\d{4}')])
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.createCustomerForm.value);
  }
}
