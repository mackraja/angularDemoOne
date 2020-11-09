import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiifmBenefitsComponent } from './wiifm-benefits.component';

describe('WiifmBenefitsComponent', () => {
  let component: WiifmBenefitsComponent;
  let fixture: ComponentFixture<WiifmBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WiifmBenefitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WiifmBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
