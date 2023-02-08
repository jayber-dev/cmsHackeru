import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditContactsComponent } from './add-contacts.component';

describe('AddContactsComponent', () => {
  let component: AddEditContactsComponent;
  let fixture: ComponentFixture<AddEditContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
