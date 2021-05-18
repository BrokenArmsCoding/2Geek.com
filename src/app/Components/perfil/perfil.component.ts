import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit {

  ModoCambio: String = "Perfil";
  nombreUsuario: String;

  usuario:any = {}

  constructor(private DB: ServicesService) { }

  ngOnInit(): void {
  this.nombreUsuario = localStorage.getItem('User');
  localStorage.removeItem("NombreComunidad");
  localStorage.removeItem("DescripcionComunidad");
  this.GetUsuario();

  }

  GetUsuario(){
    console.log(this.nombreUsuario);
    this.DB.GetUsuario(this.nombreUsuario).subscribe(
      result => this.usuario = result[0]
    );
  }

  Cambiar_Opcion(op: String): void {
    this.ModoCambio = op;
  }

}
