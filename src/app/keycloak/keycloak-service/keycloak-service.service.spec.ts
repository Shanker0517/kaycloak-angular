import { TestBed } from '@angular/core/testing';

import { KeycloakService } from './keycloak-service.service';

describe('KeycloakServiceService', () => {
  let service: KeycloakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeycloakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
