import { TestBed } from '@angular/core/testing';

import { DatielsService } from './datiels.service';

describe('DatielsService', () => {
  let service: DatielsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatielsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
