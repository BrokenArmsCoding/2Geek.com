import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { swalProviderToken } from '@sweetalert2/ngx-sweetalert2/lib/di';
import { ServicesService } from 'src/app/Services/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil-comunidad',
  templateUrl: './perfil-comunidad.component.html',
  styleUrls: ['./perfil-comunidad.component.css']
})
export class PerfilComunidadComponent implements OnInit {

  NuevoPost: FormGroup;

  ModoCambio: String = "Posts";
  nombreComunidad: String;
  descripcionComunidad: String;
  NombreUsuario: String;
  nombreComunidadLS: String;
  descripcionComunidadLS: String;

  datosPost: any ={
    titulo: String,
    texto: String,
    nombreUsuario: String

  }

  constructor(private formBuilder: FormBuilder, private BD: ServicesService, public router: Router) { }

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

  BorrarComunidad(nombreComunidad){

    Swal.fire({
      title: 'Seguro que quieres eliminar la comunidad?',
      showDenyButton: true,
      confirmButtonText: `Borrar`,
      denyButtonText: `No borrar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.BD.DeleteTags(nombreComunidad).subscribe();

        this.DeleteInfocomunidad(nombreComunidad);
      } else if (result.isDenied) {

      }
    })


  }

  DeleteInfocomunidad(nombreComunidad){
    this.BD.DeleteInfocomunidad(nombreComunidad).subscribe();
    this.DeleteTablaComunidad(nombreComunidad);
  }

  DeleteTablaComunidad(nombreComunidad){
    this.BD.DeleteTablaComunidad(nombreComunidad).subscribe(
      datos => {
        if(datos['response'] == 'OK'){
          Swal.fire('Eliminado correctamente');
          this.router.navigate(['/Comunidades']);
        }else{

        }
      }
    );

  }


}
