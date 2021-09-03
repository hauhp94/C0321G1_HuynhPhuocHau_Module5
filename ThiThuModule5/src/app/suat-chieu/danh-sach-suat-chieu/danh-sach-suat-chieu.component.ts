import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SuatChieuService} from '../suat-chieu.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {XoaSuatChieuComponent} from '../xoa-suat-chieu/xoa-suat-chieu.component';

@Component({
  selector: 'app-danh-sach-suat-chieu',
  templateUrl: './danh-sach-suat-chieu.component.html',
  styleUrls: ['./danh-sach-suat-chieu.component.css']
})
export class DanhSachSuatChieuComponent implements OnInit {
  danhSachSuatChieu: any = [];
  keyword: string;
  p: string | number;
  searchKey: any;

  constructor(private suatChieuService: SuatChieuService,
              public snackbar: MatSnackBar,
              public dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit(): void {
    this.suatChieuService.findAll().subscribe(value => this.danhSachSuatChieu = value);
  }

  openDialogDelete(id: any) {
    this.suatChieuService.findById(id).subscribe(suatChieu => {
      const dialogRef = this.dialog.open(XoaSuatChieuComponent, {
        width: '700px',
        data: {data1: suatChieu},
        disableClose: true,
        panelClass: 'custom-modalbox'
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    });
  }
}
