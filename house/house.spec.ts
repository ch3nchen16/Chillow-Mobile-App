import { TestBed } from '@angular/core/testing';

import { House } from './house';

describe('House', () => {
  let service: House;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(House);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
