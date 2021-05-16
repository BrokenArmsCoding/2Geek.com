import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/Services/services.service';
@Component({
  selector: 'app-perfil-editar',
  templateUrl: './perfil-editar.component.html',
  styleUrls: ['./perfil-editar.component.css']
})

export class PerfilEditarComponent implements OnInit {

  PerfilInfo: FormGroup;
  constructor(private formBuilder: FormBuilder, private DB: ServicesService) { }

  ngOnInit(): void {

    this.PerfilInfo = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      fecha: ['', Validators.required]
    });

  }
  get perfdata() {
    return this.PerfilInfo.controls;
  }

  UpdateCont() {
    this.refresh();
  }

  refresh(): void {
    window.location.reload();
  }


  // Funcion de ejemplo que se usa para llenar el Form con los datos existentes
  //
  // usuario es el FormGroup al que le dan los datos
  // datos: any = {}
  //
  //
  // GetAlumno(nombre_Usuario) {
  //   this.BD.GetAlumno(nombre_Usuario).subscribe(
  //     result => {
  //       this.datos = result[0];
  //       this.usuario.setValue({
  //         'nombre': this.datos['nombre'],
  //         'apellido': this.datos['apellido'],
  //         'correo': this.datos['email']
  //       });
  //     }
  //   );
  //   }




  // Funcion de ejemplo que se usa para recojer los datos del form y subir-los
  //
  // Datos_Usuario: any = {
  //   nombre: null,
  //   apellido: null,
  //   correo: null,
  //   nombre_Usuario: null
  // }

  // cambiarDatosAlumno() {

  //   //Paso de datos del FromGroup y el nick del usuario a un Objeto para el update,
  //   //ya que el formgroup no cuenta con todos los campos
  //   this.Datos_Usuario.nombre = this.usuario.controls.nombre.value;
  //   this.Datos_Usuario.apellido = this.usuario.controls.apellido.value;
  //   this.Datos_Usuario.correo = this.usuario.controls.correo.value;
  //   this.Datos_Usuario.nombre_Usuario = this.nombre_Usuario;

  //   console.log(this.Datos_Usuario)
  //   this.BD.CambiosPerfilAlumno(this.Datos_Usuario).subscribe(
  //     datos => {
  //       if (datos['response'] == 'OK') {
  //         this.UpdateCont();
  //       } else {
  //         Swal.fire('Error', '');
  //       }
  //     }
  //   )
  // }

}
