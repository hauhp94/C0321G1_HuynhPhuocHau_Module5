import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SuatChieu} from './suat-chieu';
import {Phim} from './phim';

@Injectable({
  providedIn: 'root'
})
export class SuatChieuService {
  API_URL = 'http://localhost:3000/suatChieuPhim';
  API_URL_TYPE = 'http://localhost:3000/danhSachPhim';

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<SuatChieu[]> {
    return this.httpClient.get<SuatChieu[]>(this.API_URL);
  }

  findAllPhim(): Observable<Phim[]> {
    return this.httpClient.get<Phim[]>(this.API_URL_TYPE);
  }

  findById(id: number): Observable<SuatChieu> {
    return this.httpClient.get<SuatChieu>(this.API_URL + '/' + id);
  }

  createSuatChieu(suatChieu: SuatChieu): Observable<SuatChieu> {
    return this.httpClient.post<SuatChieu>(this.API_URL, suatChieu);
  }

  deleteById(id: number): Observable<any> {
    return this.httpClient.delete(this.API_URL + '/' + id);
  }

  // @ts-ignore
  isCodeExist(code: string): any {
    // tslint:disable-next-line:label-position
    let list: SuatChieu[];
    this.httpClient.get<SuatChieu[]>(this.API_URL_TYPE).subscribe(value => list = value);
    // tslint:disable-next-line:prefer-for-of
    for (const suatChieus of list) {
      if (suatChieus.maSuatChieu === code) {
        return {codeInvalid: true};
      }
    }
    return null
  }
}
