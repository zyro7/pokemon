import { TestBed } from '@angular/core/testing';

import { IsActiveService } from './is-active.service';

describe('IsActiveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IsActiveService = TestBed.get(IsActiveService);
    expect(service).toBeTruthy();
  });
});
