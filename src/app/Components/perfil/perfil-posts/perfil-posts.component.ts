import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-perfil-posts',
  templateUrl: './perfil-posts.component.html',
  styleUrls: ['./perfil-posts.component.css']
})
export class PerfilPostsComponent implements OnInit {

  Idioma: String;

  Posts: any = {
    nombrePost: String,
    descipcionPost: String,
    fechaPost: String,
    UsuarioPost: String,
    nombreUsuario: String,
    idPost: String
  }

  NombreUsuario: String;

  constructor(private BD: ServicesService) { }

  ngOnInit(): void {

    this.NombreUsuario = localStorage.getItem("User");
    this.SelectPosts();
  }

  ngAfterContentInit(): void{
    this.Idioma = sessionStorage.getItem("Idioma");
  }

  SelectPosts(){
    this.BD.selectPostsPerfil(this.NombreUsuario).subscribe(
      result => this.Posts = result
    )

  }
}
