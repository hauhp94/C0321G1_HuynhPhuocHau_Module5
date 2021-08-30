import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerServiceService} from '../customer-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../customer';
import {MatSnackBar} from '@angular/material/snack-bar';
import {CustomerType} from '../customer-type';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  editCustomerForm = new FormGroup({
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
  id: number;
  customer: Customer;
  customerTypeList: CustomerType[];

  constructor(private customerServiceService: CustomerServiceService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private snackBar: MatSnackBar) {
    this.id = Number(activatedRoute.snapshot.params.id);
    console.log(this.id);
  }

  ngOnInit(): void {
    this.getCustomerType();
    this.getCustomer();
  }

  onSubmitUpdate() {
    this.customer = this.editCustomerForm.value;
    console.log('form: ' + this.customer.phoneCustomer);
    this.customerServiceService.updateCustomer(this.customer)
      .subscribe(value => this.router.navigateByUrl('customer/list'));
    this.customerServiceService.message = 'update ok';
    this.snackBar.open('update ok ' + this.customer.nameCustomer, 'ok');
  }

  getCustomer() {
    this.customerServiceService.findById(this.id).subscribe(
      value => this.editCustomerForm.setValue(value));
  }

  getCustomerType() {
    this.customerServiceService.findAllCustomerType()
      .subscribe(value => this.customerTypeList = value);
  }
}
