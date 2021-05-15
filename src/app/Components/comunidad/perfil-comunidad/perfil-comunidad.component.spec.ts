import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilComunidadComponent } from './perfil-comunidad.component';

describe('PerfilComunidadComponent', () => {
  let component: PerfilComunidadComponent;
  let fixture: ComponentFixture<PerfilComunidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilComunidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilComunidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
