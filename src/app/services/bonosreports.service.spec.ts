import { TestBed } from '@angular/core/testing';

import { BonosreportsService } from './bonosreports.service';

describe('BonosreportsService', () => {
  let service: BonosreportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BonosreportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
