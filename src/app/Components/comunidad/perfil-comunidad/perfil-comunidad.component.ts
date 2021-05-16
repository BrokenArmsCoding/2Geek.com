import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-perfil-comunidad',
  templateUrl: './perfil-comunidad.component.html',
  styleUrls: ['./perfil-comunidad.component.css']
})
export class PerfilComunidadComponent implements OnInit {

  ModoCambio: String = "Posts";
  nombreComunidad: String;
  descripcionComunidad: String;
  NombreUsuario: String;
  NuevoPost: FormGroup;

  constructor(private formBuilder: FormBuilder, private BD: ServicesService) { }

  ngOnInit(): void {

    this.nombreComunidad =this.BD.getDescripcionComunidad();
    this.descripcionComunidad = this.BD.getNombreComunidad();
    this.NombreUsuario = localStorage.getItem("User");

    console.log(this.nombreComunidad,this.descripcionComunidad);

    this.NuevoPost = this.formBuilder.group({
      titulo: ['', Validators.required],
      texto: ['', Validators.required]
    });

  }

  Cambiar_Opcion(op: String): void {
    this.ModoCambio = op;
  }

  Volver(): void {
    this.NuevoPost.reset();
    this.Cambiar_Opcion("Posts");
  }

  get infopost() {
    return this.NuevoPost.controls;
  }

}
