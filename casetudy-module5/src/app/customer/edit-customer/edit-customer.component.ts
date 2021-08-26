import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerServiceService} from '../customer-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../customer';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  editCustomerForm = new FormGroup({
    customerId: new FormControl('', Validators.required),
    typeCustomerId: new FormControl('', Validators.required),
    nameCustomer: new FormControl('', Validators.required),
    dateOfBirthCustomer: new FormControl('', Validators.required),
    idCardCustomer: new FormControl('', Validators.required),
    phoneCustomer: new FormControl('', [Validators.required, Validators.pattern('^(09[0,1]\\d{7})$|^(\\(84\\)9[0,1]\\d{7})$')]),
    emailCustomer: new FormControl('', [Validators.required, Validators.email]),
    addressCustomer: new FormControl('', Validators.required),
    codeCustomer: new FormControl('', [Validators.required, Validators.pattern('KH-\\d{4}')])
  });
  id: number;

  constructor(private customerServiceService: CustomerServiceService,
              private activatedRoute: ActivatedRoute, private router: Router) {
    this.id = Number(activatedRoute.snapshot.params.id);
    console.log('id: ' + this.id);
    console.log('id type : ' + typeof this.id);
    const customer = this.findCustomerById(this.id);
    console.log('name: ' + customer.nameCustomer);
    this.editCustomerForm.setValue(customer);
  }

  ngOnInit(): void {
  }

  private findCustomerById(id: number) {
    return this.customerServiceService.findById(id);
  }

  onSubmitUpdate(id: number) {
    const customer = this.editCustomerForm.value;
    this.customerServiceService.updateProduct(id, customer);
    alert('Cập nhật thành công');
    this.customerServiceService.message = 'update ok';
    this.router.navigateByUrl('customer/list');
  }
}
