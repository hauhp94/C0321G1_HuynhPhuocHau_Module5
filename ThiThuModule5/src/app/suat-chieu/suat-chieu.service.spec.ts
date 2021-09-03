import { TestBed } from '@angular/core/testing';

import { SuatChieuService } from './suat-chieu.service';

describe('SuatChieuService', () => {
  let service: SuatChieuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuatChieuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
