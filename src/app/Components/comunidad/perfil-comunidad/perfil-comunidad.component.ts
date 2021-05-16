import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/Services/services.service';
import Swal from 'sweetalert2';

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
  nombreComunidadLS: String;
  descripcionComunidadLS: String;

  datosPost: any ={
    titulo: String,
    texto: String,
    nombreUsuario: String

  }

  constructor(private formBuilder: FormBuilder, private BD: ServicesService) { }

  ngOnInit(): void {

    this.nombreComunidad =this.BD.getDescripcionComunidad();
    this.descripcionComunidad = this.BD.getNombreComunidad();

    this.NombreUsuario = localStorage.getItem("User");
    this.nombreComunidadLS = localStorage.getItem("NombreComunidad");
    this.descripcionComunidadLS = localStorage.getItem("DescripcionComunidad");

    console.log(this.nombreComunidadLS,this.descripcionComunidad);

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

  crearPost(){

    this.datosPost.nombreComunidad = this.nombreComunidadLS;
    this.datosPost.titulo = this.infopost.titulo.value;
    this.datosPost.texto = this.infopost.texto.value;
    this.datosPost.nombreUsuario = this.NombreUsuario;

    console.log(this.datosPost);

    this.BD.insertPost(this.datosPost).subscribe(
      datos => {
        if(datos['response'] == 'OK'){
          Swal.fire('Post creado correctamente', '' );
          this.Cambiar_Opcion("Posts");
          this.NuevoPost.reset();
        }
      }
    );

  }



}
