import {Component, OnInit} from '@angular/core';
import {Customer} from '../customer';
import {CustomerServiceService} from '../customer-service.service';
import {error} from '@angular/compiler/src/util';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {DeleteCustomerComponent} from '../delete-customer/delete-customer.component';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  // public maxSize: number = 5;
  // public directionLinks: boolean = true;
  // public autoHide: boolean = false;
  // public responsive: boolean = true;
  // public labels: any = {
  //   previousLabel: '<',
  //   nextLabel: '>',
  //   screenReaderPaginationLabel: 'Pagination',
  //   screenReaderPageLabel: 'page',
  //   screenReaderCurrentLabel: `You're on page`
  // };
  message: string;
  customerList: any = [];
  keyword: string;
  p: string | number;

  constructor(private customerServiceService: CustomerServiceService,
              public snackbar: MatSnackBar,
              public dialog: MatDialog,
              private router: Router) {
    this.message = customerServiceService.message;
  }

  ngOnInit(): void {
    this.customerServiceService.findAll().subscribe(value =>
      this.customerList = value);
  }

  openDialogDelete(customerId): void {
    console.log('id: ' + customerId);
    this.customerServiceService.findById(customerId).subscribe(customer => {
      const dialogRef = this.dialog.open(DeleteCustomerComponent, {
        width: '700px',
        data: {data1: customer},
        disableClose: true,
        panelClass: 'custom-modalbox'
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    });
    // console.log('open delete function id= ' + customerId);
    // this.customerServiceService.deleteById(customerId)
    //   .subscribe(value => this.router.navigateByUrl(''),
    //     error1 => console.log('loi'));
    // this.snackbar.open('delete ok', 'ok');
  }

  // deleteCustomer(customer, i) {
  //   this.collection.this.collection.splice(i, 1);
  //   this.customerService.deleteCustomer(customer.id).subscribe((result) => {
  //     console.log('Data is Deleted Successfull !', result);
  //     this.alert = true;
  //   });
  // }

  searchAll() {
    this.customerServiceService.searchAll(this.keyword).subscribe(value =>
      this.customerList = value);
    this.p = 0;
  }

  sortByName() {
    this.customerServiceService.sortAll().subscribe(data => {
      this.customerList = data;
    });
  }

}
