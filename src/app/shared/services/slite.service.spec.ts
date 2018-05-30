import { TestBed, inject } from '@angular/core/testing';

import { SliteService } from './slite.service';

describe('SliteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SliteService]
    });
  });

  it('should be created', inject([SliteService], (service: SliteService) => {
    expect(service).toBeTruthy();
  }));
});
