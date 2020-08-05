import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderColumnsComponent } from './order-columns.component';

describe('OrderColumnsComponent', () => {
  let component: OrderColumnsComponent;
  let fixture: ComponentFixture<OrderColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
