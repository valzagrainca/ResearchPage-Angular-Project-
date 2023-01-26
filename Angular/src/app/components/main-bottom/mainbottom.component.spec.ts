import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainbottomComponent } from './mainbottom.component';

describe('MainbottomComponent', () => {
  let component: MainbottomComponent;
  let fixture: ComponentFixture<MainbottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainbottomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainbottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
