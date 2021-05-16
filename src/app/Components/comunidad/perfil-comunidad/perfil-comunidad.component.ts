import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-perfil-comunidad',
  templateUrl: './perfil-comunidad.component.html',
  styleUrls: ['./perfil-comunidad.component.css']
})
export class PerfilComunidadComponent implements OnInit {

  nombreComunidad: String;
  descripcionComunidad: String;
  NombreUsuario: String;

  constructor(private BD: ServicesService) { }

  ngOnInit(): void {

    this.nombreComunidad =this.BD.getDescripcionComunidad();
    this.descripcionComunidad = this.BD.getNombreComunidad();

    this.NombreUsuario = localStorage.getItem("User");

    console.log(this.nombreComunidad,this.descripcionComunidad);

  }


}
