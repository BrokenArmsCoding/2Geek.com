import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comprobacion } from './Contra_Repetida';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {

  Usuario: FormGroup;
  Idioma: String;
  DatosUsuario : { }

  constructor(private formBuilder: FormBuilder,public router: Router, private BD: ServicesService) { }

  ngOnInit(): void {

    this.Usuario = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      nick: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9_]+')]],
      email: ['', [Validators.required, Validators.email]],
      cont: ['', Validators.required],
      rep_cont: ['', Validators.required]
    }, {
      validator: Comprobacion('cont', 'rep_cont')
    });

  }

  ngAfterContentInit(): void{
    this.Idioma = sessionStorage.getItem("Idioma");
    sessionStorage.setItem("switch", "switch");
  }

  get Data() {
    return this.Usuario.controls;
  }

  gotoLogin() {
    this.router.navigate(['Login']);
  }


  Crear_Perfil(){

    Swal.fire({
      title: 'Estas seguro?',
      text: "¡ Estos son los datos con los que crearas el perfil !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4a4a50',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, crear!'

    }).then((result) => {

      if (result.isConfirmed == true) {


    this.BD.createPerfil(this.Usuario.getRawValue()).subscribe(

      datos => {
        if (datos['response'] == 'OK') {
          Swal.fire('Creado', '');
          this.router.navigate(['/Login']);
        } else if (datos['response'] == 'FAIL'){
          Swal.fire('Usuario ya existe', '');
        }
      }
    );
      }
    })
  }
}


