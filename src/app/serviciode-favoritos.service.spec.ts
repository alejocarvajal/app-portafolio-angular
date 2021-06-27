import { TestBed } from '@angular/core/testing';

import { ServiciodeFavoritosService } from './serviciode-favoritos.service';

describe('ServiciodeFavoritosService', () => {
  let service: ServiciodeFavoritosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciodeFavoritosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
