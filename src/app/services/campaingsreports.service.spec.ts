import { TestBed } from '@angular/core/testing';

import { CampaingsreportsService } from './campaingsreports.service';

describe('CampaingsreportsService', () => {
  let service: CampaingsreportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampaingsreportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
