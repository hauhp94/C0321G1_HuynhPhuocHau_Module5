import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DanhSachSuatChieuComponent} from './suat-chieu/danh-sach-suat-chieu/danh-sach-suat-chieu.component';
import {TaoSuatChieuComponent} from './suat-chieu/tao-suat-chieu/tao-suat-chieu.component';


const routes: Routes = [
  {
    path: '',
    component: DanhSachSuatChieuComponent
  },
  {
    path: 'create',
    component: TaoSuatChieuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
