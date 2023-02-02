import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumersViewComponent } from './costumers-view.component';

describe('CostumersViewComponent', () => {
  let component: CostumersViewComponent;
  let fixture: ComponentFixture<CostumersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostumersViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostumersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
