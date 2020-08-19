import { TestBed } from '@angular/core/testing';

import { SortOrdersService } from './sort-orders.service';

describe('SortOrdersService', () => {
  let service: SortOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
