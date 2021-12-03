import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonosreportsComponent } from './bonosreports.component';

describe('BonosreportsComponent', () => {
  let component: BonosreportsComponent;
  let fixture: ComponentFixture<BonosreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonosreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonosreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
