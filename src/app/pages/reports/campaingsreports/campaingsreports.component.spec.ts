import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaingsreportsComponent } from './campaingsreports.component';

describe('CampaingsreportsComponent', () => {
  let component: CampaingsreportsComponent;
  let fixture: ComponentFixture<CampaingsreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaingsreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaingsreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
