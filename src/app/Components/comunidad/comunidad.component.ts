import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.css']
})
export class ComunidadComponent implements OnInit {

  Opcion_Selec: String = "Busqueda";
  Parametros: FormGroup;
  NuevaComunidad: FormGroup;
  NombreUsuario: String;
  nombreComunidad: String;
  nombreTag: String;
  pasarNombreComunidad: string;
  Idioma: String;


  DatosComunidad: any = {
    nombreComunidad: String,
    descripcionComunidad: String,
    tagComunidad: String,
    nombreUsuario: String,
    tag: String
  }

  SelectComunidad: Object = {
    id_comunidad: String,
    mensajeComunidad: String,
    nombreComunidad: String
  }

  BuscadorComunidades: any = {

  }

  unirseComunidadDatos: any = {

  }

  constructor(private formBuilder: FormBuilder,  private BD: ServicesService,public router: Router) { }

  ngOnInit(): void {

    this.Parametros = this.formBuilder.group({
      nombreComunidad: ['', ],
      tag_p: ['',]
    });

    this.NuevaComunidad = this.formBuilder.group({
      nombre: ['', [Validators.required,Validators.pattern("[A-Za-z0-9]+")]],
      mensaje:['', Validators.required],
      tag: ['', Validators.required]
    });

    localStorage.removeItem("NombreComunidad");
    localStorage.removeItem("DescripcionComunidad");
    this.NombreUsuario = localStorage.getItem("User");

    this.SelectComunidades();
    this.selectUserComunidad();
    document.getElementById("to_top").style.setProperty('display','none',);
  }

  ngAfterContentInit(): void{
    this.Idioma = sessionStorage.getItem("Idioma");
    sessionStorage.setItem("switch", "switch");
  }

  get info() {
    return this.Parametros.controls;
  }

  get data() {
    return this.NuevaComunidad.controls;
  }

  iraComunidad(nombreComunidad: string, descripcionComunidad: string){
    this.BD.setDatosComunidad(nombreComunidad,descripcionComunidad);

    localStorage.setItem("NombreComunidad",nombreComunidad);
    localStorage.setItem("DescripcionComunidad",descripcionComunidad);
    this.router.navigate(['/PerfilComponente']);
  }

  Cambiar_Opcion(op: String): void {
    this.Opcion_Selec = op;
    this.Parametros.reset();
    this.NuevaComunidad.reset();
    this.BuscadorComunidades = [];

  }

  SelectComunidades(){

    this.BD.selectComunidades(this.NombreUsuario).subscribe(
      result => this.SelectComunidad = result
    );

  }

  buscarComunidades(){
    this.nombreComunidad = this.info.nombreComunidad.value;
    this.BD.buscadorComunidades(this.nombreComunidad).subscribe(
      result => this.BuscadorComunidades = result
    );

  }


  CrearComunidad(){

    this.DatosComunidad.tag = this.data.tag.value;
    this.DatosComunidad.nombreUsuario = this.NombreUsuario;
    this.DatosComunidad.nombreComunidad = this.data.nombre.value;
    this.DatosComunidad.descripcionComunidad = this.data.mensaje.value;
    this.DatosComunidad.tagComunidad = this.data.tag.value;
    this.DatosComunidad.idComunidad;

    this.BD.createComunidad(this.DatosComunidad).subscribe(
      datos => {
        if(datos['response'] == 'OK'){
            this.BD.insertCreadorTablaComunidad(this.DatosComunidad).subscribe(

              );

              this.BD.insertTags(this.DatosComunidad).subscribe()

              this.BD.insertTabalUserCreador(this.DatosComunidad).subscribe()


          Swal.fire("Comunidad Creada ", '');
          this.refresh();
        }else{
          Swal.fire("Error al crear la comunidad ", '');
        }
      }
    )

  }

  refresh(): void {
    window.location.reload();
  }

  unirseComunidad(nombreComundad: String, DescripcionComunidad: String){

    this.unirseComunidadDatos.nombreComunidad = nombreComundad;
    this.unirseComunidadDatos.nombreUsuario = this.NombreUsuario;
    this.unirseComunidadDatos.descripcionComunidad = DescripcionComunidad;

    this.BD.comprobarUnirseComunidad(this.unirseComunidadDatos).subscribe(
      datos => {
        if(datos['response'] == 'FAIL'){
          Swal.fire("Error al unirse a la comunidad ", '');
        }else{
          this.BD.insertTabalUserComunidad(this.unirseComunidadDatos).subscribe();
          Swal.fire("Unido correctamente ", '');
          this.refresh();
        }
      }
    );
  }

  selectUserComunidad(){
    this.BD.selectUserComunidades(this.NombreUsuario).subscribe(
      result => this.SelectComunidad = result
    );
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
