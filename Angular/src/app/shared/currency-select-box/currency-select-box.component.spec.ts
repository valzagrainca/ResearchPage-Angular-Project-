import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencySelectBoxComponent } from './currency-select-box.component';

describe('CurrencySelectBoxComponent', () => {
  let component: CurrencySelectBoxComponent;
  let fixture: ComponentFixture<CurrencySelectBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencySelectBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencySelectBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
