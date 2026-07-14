import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCursos } from './registro-cursos';

describe('RegistroCursos', () => {
  let component: RegistroCursos;
  let fixture: ComponentFixture<RegistroCursos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroCursos],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroCursos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
