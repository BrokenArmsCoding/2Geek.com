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
    document.getElementById("to_top").style.setProperty('display','none',);

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

  onWindowScroll(){
    if( window.pageYOffset  > 300){
      document.getElementById("to_top").style.setProperty('display','initial',);
    }
    else{
      document.getElementById("to_top").style.setProperty('display','none',);
    }
  }

  top() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
}
