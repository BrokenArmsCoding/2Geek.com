import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-perfil-comunidades',
  templateUrl: './perfil-comunidades.component.html',
  styleUrls: ['./perfil-comunidades.component.css']
})
export class PerfilComunidadesComponent implements OnInit {


  SelectComentarios: Object = {}
  Idioma: String;
  NombreUsuario: String;

  constructor(private BD: ServicesService) { }

  ngOnInit(): void {

    this.NombreUsuario = localStorage.getItem("User");
    this.Idioma =localStorage.getItem("Idioma");
    this.selectComunidades();
  }

  selectComunidades(){
    this.BD.selectComunidadesPerfil(this.NombreUsuario).subscribe(
      result => this.SelectComentarios = result
    );
  }

}
