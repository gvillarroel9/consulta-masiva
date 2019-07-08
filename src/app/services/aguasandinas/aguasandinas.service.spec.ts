import { TestBed } from '@angular/core/testing';

import { AguasandinasService } from './aguasandinas.service';

describe('AguasandinasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AguasandinasService = TestBed.get(AguasandinasService);
    expect(service).toBeTruthy();
  });
});
