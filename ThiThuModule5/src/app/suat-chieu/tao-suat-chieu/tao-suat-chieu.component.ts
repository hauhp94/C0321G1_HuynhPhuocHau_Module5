import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {SuatChieuService} from '../suat-chieu.service';
import {Phim} from '../phim';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-tao-suat-chieu',
  templateUrl: './tao-suat-chieu.component.html',
  styleUrls: ['./tao-suat-chieu.component.css']
})
export class TaoSuatChieuComponent implements OnInit {
  createSuatChieuForm: FormGroup;
  danhSachPhim: Phim[];

  constructor(private suatChieuService: SuatChieuService,
              private router: Router,
              private snackBar: MatSnackBar) {
    this.suatChieuService.findAllPhim().subscribe(value => this.danhSachPhim = value);
    this.createSuatChieuForm = new FormGroup({
      id: new FormControl('', Validators.required),
      maSuatChieu: new FormControl('', [Validators.required, Validators.pattern('CI-\\d{4}'), this.codeValid]),
      phim: new FormControl('', Validators.required),
      ngayChieu: new FormControl('', Validators.required),
      soLuongVe: new FormControl('', [Validators.required, Validators.pattern('\\d+')])
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const suatChieu = this.createSuatChieuForm.value;
    this.suatChieuService.createSuatChieu(suatChieu).subscribe(value =>
      this.router.navigateByUrl(''));
    this.snackBar.open('create ok ', 'ok');
    console.log(this.suatChieuService.isCodeExist('CI-1231'));
  }

  codeValid(codeControl: AbstractControl): any {
    const code = codeControl.value;
    if (this.suatChieuService.isCodeExist(code)) {
      return {invalidCode: true};
    }
    return null;

  }
}
