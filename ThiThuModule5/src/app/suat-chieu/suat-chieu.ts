import {Phim} from './phim';

export interface SuatChieu {
  id: number;
  maSuatChieu: string;
  phim: Phim;
  ngayChieu: string;
  soLuongVe: number;
}
