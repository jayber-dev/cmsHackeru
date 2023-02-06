import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersFoldersComponent } from './users-folders.component';

describe('UsersFoldersComponent', () => {
  let component: UsersFoldersComponent;
  let fixture: ComponentFixture<UsersFoldersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersFoldersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersFoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
