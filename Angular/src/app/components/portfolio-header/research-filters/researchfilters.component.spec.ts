import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchfiltersComponent } from './researchfilters.component';

describe('ResearchfiltersComponent', () => {
  let component: ResearchfiltersComponent;
  let fixture: ComponentFixture<ResearchfiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchfiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchfiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
