import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSavingComponent } from './edit-saving.component';

describe('EditSavingComponent', () => {
  let component: EditSavingComponent;
  let fixture: ComponentFixture<EditSavingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSavingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
