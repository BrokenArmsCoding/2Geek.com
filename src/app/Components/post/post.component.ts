import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/Services/services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

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
  Idioma: String;

  Posts: any = {
    nombrePost: String,
    descipcionPost: String,
    fechaPost: String,
    UsuarioPost: String,
    nombreUsuario: String,
    idPost: String
  }

  comentariosPost: any = {
    comentario: String,
    nombreUsuario: String,
    tituloPost: String,
  }

  SelectComentariosDB: any = {
    comentario: String,
    nombreUsuario: String,
    tituloPost: String,
    Nombre_Post: String
  }

  constructor(private BD: ServicesService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.nombreComunidadLS = localStorage.getItem("NombreComunidad");
    this.NombreUsuario = localStorage.getItem("User");
    this.SelectPosts();

    this.comentario = this.formBuilder.group({
      comentario: ['', Validators.required]
    });

    this.SelectComentarios();
  }

  ngAfterContentInit(): void {
    this.Idioma = sessionStorage.getItem("Idioma");
  }

  get infocomentario() {
    return this.comentario.controls;
  }

  SelectPosts() {
    this.BD.selectPost(this.nombreComunidadLS).subscribe(
      result => this.Posts = result
    );

  }

  Comentar(tituloPost: String) {

    this.comentariosPost.comentario = this.infocomentario.comentario.value;
    this.comentariosPost.tituloPost = tituloPost;
    this.comentariosPost.nombreUsuario = this.NombreUsuario;
    this.comentariosPost.nombreComunidad = this.nombreComunidadLS;

    this.BD.selectIDPost(tituloPost).subscribe(
      result => this.comentariosPost.idpost = result[0]
    );

    this.BD.deleteComentario0().subscribe();

    this.BD.insertComentario(this.comentariosPost).subscribe(
      datos => {
        if (datos['response'] == 'FAIL') {

          Swal.fire('No Puedes', '');

        } else {
          //Swal.fire('Si Puedes ', '');
          window.location.reload();
        }
      }
    );

  }

  SelectComentarios() {

    this.BD.selectComentarios(this.nombreComunidadLS).subscribe(
      result => this.SelectComentariosDB = result
    )

  }

}
