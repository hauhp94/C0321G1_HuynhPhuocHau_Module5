import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CustomerServiceService} from '../customer-service.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
  public nameCustomer: string;
  public id: number;

  constructor(public dialogRef: MatDialogRef<DeleteCustomerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public customerServiceService: CustomerServiceService,
              private router: Router,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    console.log('kkkkk');
    console.log(this.data.data1);
    this.nameCustomer = this.data.data1.nameCustomer;
    this.id = this.data.data1.id;
    console.log(this.nameCustomer);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  delete() {
    console.log('funcrtion de delete');
    this.customerServiceService.deleteCustomer(this.id).subscribe(dataDialog => {
      console.log('da xoa customer');
      this.dialogRef.close();
      this.snackBar.open('delete ok customer: ' + this.nameCustomer, 'ok');
    });
  }
}
