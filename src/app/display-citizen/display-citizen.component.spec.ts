import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCitizenComponent } from './display-citizen.component';

describe('DisplayCitizenComponent', () => {
  let component: DisplayCitizenComponent;
  let fixture: ComponentFixture<DisplayCitizenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCitizenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayCitizenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
