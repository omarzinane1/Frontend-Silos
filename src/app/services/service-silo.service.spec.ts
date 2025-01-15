import { TestBed } from '@angular/core/testing';

import { ServiceSiloService } from './service-silo.service';

describe('ServiceSiloService', () => {
  let service: ServiceSiloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceSiloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
