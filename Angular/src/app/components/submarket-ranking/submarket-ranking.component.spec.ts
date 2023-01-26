import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmarketRankingComponent } from './submarket-ranking.component';

describe('SubmarketRankingComponent', () => {
  let component: SubmarketRankingComponent;
  let fixture: ComponentFixture<SubmarketRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmarketRankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmarketRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
