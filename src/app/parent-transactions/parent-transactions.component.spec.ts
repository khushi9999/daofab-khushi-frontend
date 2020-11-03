import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTransactionsComponent } from './parent-transactions.component';

describe('ParentTransactionsComponent', () => {
  let component: ParentTransactionsComponent;
  let fixture: ComponentFixture<ParentTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
