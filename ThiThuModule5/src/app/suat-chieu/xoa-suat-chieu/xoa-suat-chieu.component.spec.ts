import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XoaSuatChieuComponent } from './xoa-suat-chieu.component';

describe('XoaSuatChieuComponent', () => {
  let component: XoaSuatChieuComponent;
  let fixture: ComponentFixture<XoaSuatChieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XoaSuatChieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XoaSuatChieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
