import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsmenuComponent } from './componentsmenu.component';

describe('ComponentsmenuComponent', () => {
  let component: ComponentsmenuComponent;
  let fixture: ComponentFixture<ComponentsmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
