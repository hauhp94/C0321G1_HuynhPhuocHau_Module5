import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuatChieuPhimComponent } from './suat-chieu-phim.component';

describe('SuatChieuPhimComponent', () => {
  let component: SuatChieuPhimComponent;
  let fixture: ComponentFixture<SuatChieuPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuatChieuPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuatChieuPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
