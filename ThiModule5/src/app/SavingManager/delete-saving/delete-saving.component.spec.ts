import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSavingComponent } from './delete-saving.component';

describe('DeleteSavingComponent', () => {
  let component: DeleteSavingComponent;
  let fixture: ComponentFixture<DeleteSavingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSavingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
