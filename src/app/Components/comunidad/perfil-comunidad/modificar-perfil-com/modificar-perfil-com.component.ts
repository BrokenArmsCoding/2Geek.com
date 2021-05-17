import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/Services/services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificar-perfil-com',
  templateUrl: './modificar-perfil-com.component.html',
  styleUrls: ['./modificar-perfil-com.component.css']
})
export class ModificarPerfilComComponent implements OnInit {

  PerfilCom: FormGroup;
  constructor(private formBuilder: FormBuilder, private BD: ServicesService) { }

  ngOnInit(): void {

    this.PerfilCom = this.formBuilder.group({
      nombre: ['', Validators.required],
      mensaje: ['', Validators.required]
    });
  }
  get perfildata() {
    return this.PerfilCom.controls;
  }

  Volver(): void {
      window.location.reload();
  }

}
