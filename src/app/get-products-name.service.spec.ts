import { TestBed } from '@angular/core/testing';

import { GetProductsNameService } from './get-products-name.service';

describe('GetProductsNameService', () => {
  let service: GetProductsNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProductsNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
