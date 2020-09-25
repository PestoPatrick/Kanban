import { TestBed } from '@angular/core/testing';

import { OrderModifierService } from './order-modifier.service';

describe('OrderModifierService', () => {
  let service: OrderModifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderModifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
