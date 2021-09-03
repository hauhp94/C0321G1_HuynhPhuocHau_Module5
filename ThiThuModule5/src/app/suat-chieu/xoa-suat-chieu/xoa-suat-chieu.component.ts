import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {SuatChieuService} from '../suat-chieu.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-xoa-suat-chieu',
  templateUrl: './xoa-suat-chieu.component.html',
  styleUrls: ['./xoa-suat-chieu.component.css']
})
export class XoaSuatChieuComponent implements OnInit {
  public maSuatChieu: string;
  public id: number;
  constructor(public dialogRef: MatDialogRef<XoaSuatChieuComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public suatChieuService: SuatChieuService,
              private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.maSuatChieu = this.data.data1.maSuatChieu;
    this.id = this.data.data1.id;
  }

  delete() {
    this.suatChieuService.deleteById(this.id).subscribe(dataDialog => {
      this.dialogRef.close();
      this.snackBar.open('delete ok suat chieu: ' + this.maSuatChieu, 'ok');
    });
  }
}
