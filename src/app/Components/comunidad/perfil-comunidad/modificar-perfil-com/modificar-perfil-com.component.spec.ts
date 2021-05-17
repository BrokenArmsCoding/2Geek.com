import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPerfilComComponent } from './modificar-perfil-com.component';

describe('ModificarPerfilComComponent', () => {
  let component: ModificarPerfilComComponent;
  let fixture: ComponentFixture<ModificarPerfilComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarPerfilComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarPerfilComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
