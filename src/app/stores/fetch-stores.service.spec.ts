import { TestBed } from '@angular/core/testing';

import { FetchStoresService } from './fetch-stores.service';

describe('FetchStoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchStoresService = TestBed.get(FetchStoresService);
    expect(service).toBeTruthy();
  });
});
