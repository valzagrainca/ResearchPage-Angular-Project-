import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMarketComponent } from './table-market.component';

describe('TableMarketComponent', () => {
  let component: TableMarketComponent;
  let fixture: ComponentFixture<TableMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMarketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
