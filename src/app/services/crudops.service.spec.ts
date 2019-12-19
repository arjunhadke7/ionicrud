import { TestBed } from '@angular/core/testing';

import { CrudopsService } from './crudops.service';

describe('CrudopsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudopsService = TestBed.get(CrudopsService);
    expect(service).toBeTruthy();
  });
});
