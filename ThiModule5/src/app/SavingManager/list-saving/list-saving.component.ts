import {Component, OnInit} from '@angular/core';
import {SavingService} from '../saving.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {Saving} from '../saving';
import {DeleteSavingComponent} from '../delete-saving/delete-saving.component';

@Component({
  selector: 'app-list-saving',
  templateUrl: './list-saving.component.html',
  styleUrls: ['./list-saving.component.css']
})
export class ListSavingComponent implements OnInit {
  keyword: any;
  p: string | number;
  savingList: Saving[];
  savingListSearch: Saving[];

  searchFilter: any;
  codeSaving: any;
  nameCustomer: any;

  constructor(private savingService: SavingService,
              public snackbar: MatSnackBar,
              public dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit(): void {
    this.savingService.findAll().subscribe(value =>
      this.savingList = value);
  }

  openDialogDelete(id: number) {
    this.savingService.findById(id).subscribe(saving => {
      const dialogRef = this.dialog.open(DeleteSavingComponent, {
        width: 'auto',
        height: 'auto',
        data: {data1: saving},
        disableClose: true,
        panelClass: 'custom-modalbox',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    });
  }

  searchAll() {
    this.savingService.searchAll(this.codeSaving, this.nameCustomer).subscribe(value =>
      this.savingList = value);
    for (const savingListElement of this.savingList) {
      if (savingListElement.customer.name.includes(this.nameCustomer)) {
        this.savingListSearch.push(savingListElement);
      }
    }
    this.savingList = this.savingListSearch;
    this.p = 0;
  }
}
