import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuatChieuPhimComponent } from './suat-chieu-phim/suat-chieu-phim.component';
import { DanhSachSuatChieuComponent } from './suat-chieu/danh-sach-suat-chieu/danh-sach-suat-chieu.component';
import { TaoSuatChieuComponent } from './suat-chieu/tao-suat-chieu/tao-suat-chieu.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { XoaSuatChieuComponent } from './suat-chieu/xoa-suat-chieu/xoa-suat-chieu.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    SuatChieuPhimComponent,
    DanhSachSuatChieuComponent,
    TaoSuatChieuComponent,
    XoaSuatChieuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
