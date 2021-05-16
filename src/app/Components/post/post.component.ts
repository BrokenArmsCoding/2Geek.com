import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/Services/services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  nombreComunidadLS: String;
  comentario: FormGroup;
  comentarios: String;
  NombreUsuario: String;

  Posts: any = {
    nombrePost: String,
    descipcionPost: String,
    fechaPost: String,
    UsuarioPost: String,
    nombreUsuario: String
  }

  comentariosPost: any ={
    comentario: String,
    nombreUsuario: String,
    tituloPost: String
  }



  constructor(private BD: ServicesService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.nombreComunidadLS = localStorage.getItem("NombreComunidad");
    this.NombreUsuario = localStorage.getItem("User");
    this.SelectPosts();

    this.comentario = this.formBuilder.group({
      comentario: ['', Validators.required]
    });
    this.SelectComentarios();
  }

  get infocomentario() {
    return this.comentario.controls;
  }

  SelectPosts(){
    this.BD.selectPost(this.nombreComunidadLS).subscribe(
      result => this.Posts = result
    );
  }

  Comentar(tituloPost: String){

    this.comentariosPost.comentario = this.infocomentario.comentario.value;
    this.comentariosPost.tituloPost = tituloPost;
    this.comentariosPost.nombreUsuario = this.NombreUsuario;

    console.log(this.comentariosPost);

    this.BD.insertComentario(this.comentariosPost).subscribe(

    )

  }

  SelectComentarios(){

    this.BD.selectComentarios(this.nombreComunidadLS).subscribe(
      result => this.comentariosPost = result
    )

  }

}
