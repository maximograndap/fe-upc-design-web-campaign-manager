import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCampaignsComponent } from './customer-campaigns.component';

describe('CustomerCampaignsComponent', () => {
  let component: CustomerCampaignsComponent;
  let fixture: ComponentFixture<CustomerCampaignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerCampaignsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
