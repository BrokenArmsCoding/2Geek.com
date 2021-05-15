import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/Services/services.service';
import { isThisTypeNode } from 'typescript';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.css']
})
export class ComunidadComponent implements OnInit {

  Opcion_Selec: String = "Busqueda";
  Parametros: FormGroup;
  NuevaComunidad: FormGroup;
  NombreUsuario: String;


  DatosComunidad: any = {
    nombreComunidad: String,
    descripcionComunidad: String,
    tagComunidad: String,
    nombreUsuario: String
  }


  constructor(private formBuilder: FormBuilder,  private BD: ServicesService) { }

  ngOnInit(): void {

    this.Parametros = this.formBuilder.group({
      nombre_p: ['', Validators.required],
      tag_p: ['', Validators.required]
    });

    this.NuevaComunidad = this.formBuilder.group({
      nombre: ['', Validators.required],
      mensaje:['', Validators.required],
      tag: ['', Validators.required]
    });

    this.NombreUsuario = localStorage.getItem("User");

  }

  get info() {
    return this.Parametros.controls;
  }

  get data() {
    return this.NuevaComunidad.controls;
  }

  Cambiar_Opcion(op: String): void {
    this.Opcion_Selec = op;
    this.Parametros.reset();
    this.NuevaComunidad.reset();

  }

  CrearComunidad(){

    this.DatosComunidad.nombreUsuario = this.NombreUsuario;
    this.DatosComunidad.nombreComunidad = this.data.nombre.value;
    this.DatosComunidad.descripcionComunidad = this.data.mensaje.value;
    this.DatosComunidad.tagComunidad = this.data.tag.value;

    this.BD.createComunidad(this.DatosComunidad).subscribe(

    )
  }




}
