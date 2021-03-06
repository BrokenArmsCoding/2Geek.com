import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil-comunidad',
  templateUrl: './perfil-comunidad.component.html',
  styleUrls: ['./perfil-comunidad.component.css']
})
export class PerfilComunidadComponent implements OnInit {

  NuevoPost: FormGroup;
  PerfilCom: FormGroup;

  Permisos: Object;
  ModoCambio: String = "Posts";
  nombreComunidad: String;
  descripcionComunidad: String;
  NombreUsuario: String;
  nombreComunidadLS: String;
  descripcionComunidadLS: String;
  numUsuarios: Object;
  Idioma: String;
  UsuarioPermisos: Object;

  datosPost: any ={
    titulo: String,
    texto: String,
    nombreUsuario: String

  }

  selectUsuarios: any = {}

  salirComunidad: any = {}

  SelectPermisos: any = {}

  ExpulsarUsuario: any = {}

  DatosPermisos: any = {}

  DatosUsuariosPermisos: any = {}

  Datos: any = {}


  constructor(private formBuilder: FormBuilder, private BD: ServicesService, public router: Router) { }

  ngOnInit(): void {

    this.nombreComunidad =this.BD.getDescripcionComunidad();
    this.descripcionComunidad = this.BD.getNombreComunidad();

    this.NombreUsuario = localStorage.getItem("User");
    this.nombreComunidadLS = localStorage.getItem("NombreComunidad");
    this.descripcionComunidadLS = localStorage.getItem("DescripcionComunidad");

    this.NuevoPost = this.formBuilder.group({
      titulo: ['', Validators.required],
      texto: ['', Validators.required]
    });

    this.PerfilCom = this.formBuilder.group({
      nombre: ['', Validators.required],
      mensaje: ['', Validators.required]
    });

    this.countUsuarios();
    this.selectUsuariosGestion();
    this.selectPermisosUsuario();
    document.getElementById("to_top").style.setProperty('display','none',);
  }

  ngAfterContentInit(): void{
    this.Idioma = sessionStorage.getItem("Idioma");
  }

  Cambiar_Opcion(op: String, NombreUsuario: String): void {
    this.DatosUsuariosPermisos.UsuarioPermisos = NombreUsuario;
    this.DatosUsuariosPermisos.nombreComunidad = this.nombreComunidadLS;
    this.selectPermisos();

    this.ModoCambio = op;

  }


  selectPermisos(){
    this.BD.selectPermisos(this.DatosUsuariosPermisos).subscribe(
      result => this.Datos = result
    )
    this.UsuarioPermisos = undefined;

  }

  Volver(): void {
    this.NuevoPost.reset();
    this.Cambiar_Opcion("Posts","s");
  }

  get infopost() {
    return this.NuevoPost.controls;
  }


  crearPost(){

    this.datosPost.nombreComunidad = this.nombreComunidadLS;
    this.datosPost.titulo = this.infopost.titulo.value;
    this.datosPost.texto = this.infopost.texto.value;
    this.datosPost.nombreUsuario = this.NombreUsuario;

    this.BD.insertPost(this.datosPost).subscribe(
      datos => {
        if(datos['response'] == 'OK'){
          Swal.fire('Post creado correctamente', '' );
          this.Cambiar_Opcion("Posts","");
          this.NuevoPost.reset();
        }
      }
    );

  }

  BorrarComunidad(){

    Swal.fire({
      title: 'Seguro que quieres eliminar la comunidad?',
      showDenyButton: true,
      confirmButtonText: `Borrar`,
      denyButtonText: `No borrar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        this.BD.DeleteTags(this.nombreComunidadLS).subscribe();

        this.BD.deleteUserComunidades(this.nombreComunidadLS).subscribe();

        this.BD.deletePosts(this.nombreComunidadLS).subscribe();

        this.BD.deleteComentarios(this.nombreComunidadLS).subscribe();

        this.DeleteInfocomunidad();

        this.router.navigate(['/Comunidades']);

      } else if (result.isDenied) {

      }
    })


  }

  DeleteInfocomunidad(){
    this.BD.DeleteInfocomunidad(this.nombreComunidadLS).subscribe();
    //this.DeleteTablaComunidad(nombreComunidad);
  }

  DejarComunidad(){
    Swal.fire({
      title: 'Seguro que salir de la comunidad?',
      showDenyButton: true,
      confirmButtonText: `Aceptar`,
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {

        this.salirComunidad.NombreComunidad = this.nombreComunidadLS;
        this.salirComunidad.NombreUsuario = this.NombreUsuario;
        this.BD.dejarComunidad(this.salirComunidad).subscribe();

        this.router.navigate(['/Comunidades']);

      } else if (result.isDenied) {

      }
    })

  }

  countUsuarios(){
    this.BD.selectCount(this.nombreComunidadLS).subscribe(
      result => this.numUsuarios = result[0]
    )
  }

  selectPermisosUsuario(){

    this.SelectPermisos.nombreUsuario = this.NombreUsuario;
    this.SelectPermisos.nombreComunidad = this.nombreComunidadLS;

    this.BD.selectPermisosUsuario(this.SelectPermisos).subscribe(
      result => this.Permisos = result
    );
  }

  selectUsuariosGestion(){
    this.BD.selectUsuariosGestion(this.nombreComunidadLS).subscribe(
      result => this.selectUsuarios = result
    );
  }

  expulsarUsuario(nombreUsuario: String){

    this.ExpulsarUsuario.nombreUsuario = nombreUsuario;
    this.ExpulsarUsuario.nombreComunidad = this.nombreComunidadLS;

    Swal.fire({
      title: 'Estas seguro?',
      text: "¡Este usuario se expulsara !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4a4a50',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Expulsar!'

    }).then((result) => {

      if (result.isConfirmed == true) {


        this.BD.expulsarUsuario(this.ExpulsarUsuario).subscribe(

      datos => {
        if (datos['response'] == 'OK') {
          Swal.fire('Expulsado Correctamente', '');
          this.refresh();
        } else if (datos['response'] == 'FAIL'){
          Swal.fire('Error al Expulsar', '');
        }
      }
    );
      }
    })

  }

  menosPermisos(usuario: String){

    this.DatosPermisos.nombreUsuario = usuario;
    this.DatosPermisos.nombreComunidad = this.nombreComunidadLS;

    this.BD.menosPermisos(this.DatosPermisos).subscribe(
      datos => {
        if(datos['response'] == 'OK'){
          Swal.fire("Permisos actualizados correctamente a  "+  this.DatosPermisos.nombreUsuario);
          this.refresh();
        }else{
          Swal.fire("Error al actualizar permisos ", '');
        }
      }

    )
  }

  masPermisos(usuario: String){

    this.DatosPermisos.nombreUsuario = usuario;
    this.DatosPermisos.nombreComunidad = this.nombreComunidadLS;

    this.BD.MasPermisos(this.DatosPermisos).subscribe(
      datos => {
        if(datos['response'] == 'OK'){
          Swal.fire("Permisos actualizados correctamente a  "+  this.DatosPermisos.nombreUsuario);
          this.refresh();
        }else{
          Swal.fire("Error al actualizar permisos ", '');
        }
      }
    )
  }

  ascenderaCapo(usuario: String){

    this.DatosPermisos.nombreUsuario = usuario;
    this.DatosPermisos.nombreComunidad = this.nombreComunidadLS;

    this.BD.ascenderaCapo(this.DatosPermisos).subscribe(
      datos => {
        if(datos['response'] == 'OK'){
          Swal.fire("Permisos actualizados correctamente a  "+ this.DatosPermisos.nombreUsuario);
          this.refresh();
        }else{
          Swal.fire("Error al actualizar permisos ", '');
        }
      }
    )
  }

  refresh(): void {
    window.location.reload();
  }

  onWindowScroll(){
    if( window.pageYOffset > 200){
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
