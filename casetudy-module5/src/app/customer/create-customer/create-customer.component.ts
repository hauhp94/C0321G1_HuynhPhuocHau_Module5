import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../customer';
import {CustomerServiceService} from '../customer-service.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {CustomerType} from '../customer-type';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerTypeList: CustomerType[];
  createCustomerForm = new FormGroup({
    id: new FormControl('', Validators.required),
    customerType: new FormControl('', Validators.required),
    nameCustomer: new FormControl('', Validators.required),
    dateOfBirthCustomer: new FormControl('', Validators.required),
    idCardCustomer: new FormControl('', Validators.required),
    phoneCustomer: new FormControl('', [Validators.required, Validators.pattern('^(09[0,1]\\d{7})$|^(\\(84\\)9[0,1]\\d{7})$')]),
    emailCustomer: new FormControl('', [Validators.required, Validators.email]),
    addressCustomer: new FormControl('', Validators.required),
    codeCustomer: new FormControl('', [Validators.required, Validators.pattern('KH-\\d{4}')])
  });

  constructor(private customerServiceService: CustomerServiceService,
              private router: Router,
              private snackBar: MatSnackBar) {
    this.customerServiceService.findAllCustomerType().subscribe(value => this.customerTypeList = value);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const customer = this.createCustomerForm.value;
    console.log('VALUE: ' + this.createCustomerForm.value);
    this.customerServiceService.createCustomer(customer).subscribe(value =>
      this.router.navigateByUrl(''));
    this.customerServiceService.message = 'create ok';
    this.snackBar.open('create ok ', 'ok');
  }
}
