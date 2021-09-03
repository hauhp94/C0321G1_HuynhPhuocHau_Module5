import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachSuatChieuComponent } from './danh-sach-suat-chieu.component';

describe('DanhSachSuatChieuComponent', () => {
  let component: DanhSachSuatChieuComponent;
  let fixture: ComponentFixture<DanhSachSuatChieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachSuatChieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachSuatChieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
