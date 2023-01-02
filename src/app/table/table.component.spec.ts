import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagmentComponent } from './table.component';

describe('ManagmentComponent', () => {
  let component: ManagmentComponent;
  let fixture: ComponentFixture<ManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
