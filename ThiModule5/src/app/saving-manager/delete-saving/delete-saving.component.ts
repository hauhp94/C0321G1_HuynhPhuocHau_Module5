import {Component, Inject, OnInit} from '@angular/core';
import {SavingService} from '../saving.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-saving',
  templateUrl: './delete-saving.component.html',
  styleUrls: ['./delete-saving.component.css']
})
export class DeleteSavingComponent implements OnInit {
  nameCustomer: any;
  id: number;
  constructor(private savingService: SavingService,
              public dialogRef: MatDialogRef<DeleteSavingComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private router: Router,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.nameCustomer = this.data.data1.customer.name;
    this.id = this.data.data1.id;
  }

  delete() {
    this.savingService.deleteById(this.id).subscribe(dataDialog => {
      console.log('da xoa customer');
      this.dialogRef.close();
      this.snackBar.open('delete ok saving: ' + this.nameCustomer, 'ok');
    });
  }
}
