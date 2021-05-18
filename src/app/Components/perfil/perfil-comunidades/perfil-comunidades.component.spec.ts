import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilComunidadesComponent } from './perfil-comunidades.component';

describe('PerfilComunidadesComponent', () => {
  let component: PerfilComunidadesComponent;
  let fixture: ComponentFixture<PerfilComunidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilComunidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilComunidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
