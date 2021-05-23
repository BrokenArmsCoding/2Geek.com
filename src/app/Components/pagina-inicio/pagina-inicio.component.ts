import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent implements OnInit {

  nick: String;

  Idioma: String;

  Posts: any = {
    nombrePost: String,
    descipcionPost: String,
    fechaPost: String,
    UsuarioPost: String,
    nombreUsuario: String,
    idPost: String
  }




  constructor(private BD: ServicesService) { }

  ngOnInit(): void {
    this.nick = localStorage.getItem('User');


    this.SelectPosts();
  }

  ngAfterContentInit(): void{
    this.Idioma = sessionStorage.getItem("Idioma");
  }

  SelectPosts(){
    this.BD.selectTodosPosts().subscribe(
      result => this.Posts = result
    );

  }

}
