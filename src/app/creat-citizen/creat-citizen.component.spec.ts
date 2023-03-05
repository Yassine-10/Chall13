import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatCitizenComponent } from './creat-citizen.component';

describe('CreatCitizenComponent', () => {
  let component: CreatCitizenComponent;
  let fixture: ComponentFixture<CreatCitizenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatCitizenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatCitizenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
