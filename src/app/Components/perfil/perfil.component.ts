import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit {

  ModoCambio: String = "Perfil";
  usuario:any = {}
  nombreUsuario: String;

  constructor(private DB: ServicesService) { }

  ngOnInit(): void {
  this.nombreUsuario = localStorage.getItem('User');

  this.GetUsuario();

  }

  GetUsuario(){
    this.DB.GetUsuario(this.nombreUsuario).subscribe(
      result => this.usuario = result[0]
    );
  }

  Cambiar_Opcion(op: String): void {
    this.ModoCambio = op;
  }

}
