import { TestBed } from '@angular/core/testing';

import { InvestimentosService } from './investimentos.service';

describe('InvestimentosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvestimentosService = TestBed.get(InvestimentosService);
    expect(service).toBeTruthy();
  });
});
