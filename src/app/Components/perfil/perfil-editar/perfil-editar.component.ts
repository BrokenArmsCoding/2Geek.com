import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-perfil-editar',
  templateUrl: './perfil-editar.component.html',
  styleUrls: ['./perfil-editar.component.css']
})

export class PerfilEditarComponent implements OnInit {

  NombrePerfil: String;
  Apellido: String;
  Correo: String;
  Fecha: Date;
  nick: String;
  datos: any = {};
  Idioma: String;

  DatosPerfil: any = {
    NombrePerfil: null,
    Correo: null,
    Fecha: null,
    Apellido: null,
    nick: null
  }


  PerfilInfo: FormGroup;
  constructor(private formBuilder: FormBuilder, private DB: ServicesService, public router: Router) { }

  ngOnInit(): void {
    this.nick = localStorage.getItem('User');

    this.PerfilInfo = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      fecha: ['', Validators.required]
    });
  }

  ngAfterContentInit(): void{
    this.Idioma = sessionStorage.getItem("Idioma");
  }

  get perfdata() {
    return this.PerfilInfo.controls;
  }

  UpdateCont() {
    this.refresh();
  }

  refresh(): void {
    window.location.reload();
  }

  updateDatos() {

    this.DatosPerfil.NombrePerfil = this.PerfilInfo.controls.nombre.value;
    this.DatosPerfil.Correo = this.PerfilInfo.controls.correo.value;
    this.DatosPerfil.Fecha = this.PerfilInfo.controls.fecha.value;
    this.DatosPerfil.Apellido = this.PerfilInfo.controls.apellido.value;
    this.DatosPerfil.nick = this.nick;

    this.DB.UpdatePerfil(this.DatosPerfil).subscribe()
    Swal.fire('Actualizado Correctamente', '');

  }

  GetPerfil() {
    this.DB.GetUsuario(this.nick).subscribe(
      result => {
        this.datos = result[0];
        this.PerfilInfo.setValue({
          'nombre': this.PerfilInfo['nombre'],
          'apellido': this.PerfilInfo['apellido'],
          'correo': this.PerfilInfo['email'],
          'fecha': this.PerfilInfo['fecha_nacimiento']
        });
      }
    );


  }

}
