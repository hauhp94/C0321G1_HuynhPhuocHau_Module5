import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaoSuatChieuComponent } from './tao-suat-chieu.component';

describe('TaoSuatChieuComponent', () => {
  let component: TaoSuatChieuComponent;
  let fixture: ComponentFixture<TaoSuatChieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaoSuatChieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaoSuatChieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
