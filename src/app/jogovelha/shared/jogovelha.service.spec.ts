import { TestBed } from '@angular/core/testing';

import { JogoVelhaService } from './jogovelha.service';

describe('JogoVelhaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JogoVelhaService = TestBed.get(JogoVelhaService);
    expect(service).toBeTruthy();
  });
});