import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/Services/services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificar-perfil-com',
  templateUrl: './modificar-perfil-com.component.html',
  styleUrls: ['./modificar-perfil-com.component.css']
})
export class ModificarPerfilComComponent implements OnInit {

  PerfilCom: FormGroup;

  NombreUsuario: String;
  nombreComunidadLS: String;
  descripcionComunidadLS: String;
  Idioma: String;

  nuevosDatosComunidad: any = {}

  constructor(private formBuilder: FormBuilder, private BD: ServicesService,public router: Router) { }

  ngOnInit(): void {

    this.PerfilCom = this.formBuilder.group({
      nombre: ['', Validators.required],
      mensaje: ['', Validators.required]
    });

    this.NombreUsuario = localStorage.getItem("User");
    this.nombreComunidadLS = localStorage.getItem("NombreComunidad");
    this.descripcionComunidadLS = localStorage.getItem("DescripcionComunidad");
    this.Idioma =localStorage.getItem("Idioma");
  }
  get perfildata() {
    return this.PerfilCom.controls;
  }

  Volver(): void {
      window.location.reload();
  }

  updateComunidad(){

    this.nuevosDatosComunidad.nombreviejoComunidad = this.nombreComunidadLS;
    this.nuevosDatosComunidad.descripcionviejaComunidad = this.descripcionComunidadLS;
    this.nuevosDatosComunidad.nombreComunidad = this.perfildata.nombre.value;
    this.nuevosDatosComunidad.descripcionComunidad = this.perfildata.mensaje.value;

    console.log(this.nuevosDatosComunidad);

    this.BD.updateInfoComunidadUserCom(this.nuevosDatosComunidad).subscribe();

    this.BD.updateInfoComunidad(this.nuevosDatosComunidad).subscribe();

    this.BD.updateInfoComunidadPost(this.nuevosDatosComunidad).subscribe();

    this.BD.updateInfoComunidadComentarios(this.nuevosDatosComunidad).subscribe();

    this.router.navigate(['/Comunidades']);
  }



}
