import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilContraComponent } from './perfil-contra.component';

describe('PerfilContraComponent', () => {
  let component: PerfilContraComponent;
  let fixture: ComponentFixture<PerfilContraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilContraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilContraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
