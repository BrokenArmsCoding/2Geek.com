import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comprobacion } from './Contra_Repetida';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service';
//import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {

  Usuario: FormGroup;

  DatosUsuario : {

  }

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

  get Data() {
    return this.Usuario.controls;
  }

  gotoLogin() {
    this.router.navigate(['LOG']);
  }


  Crear_Perfil(){
    this.BD.createPerfil(this.Usuario.getRawValue()).subscribe(

      datos => {
        console.log(this.Usuario);
        if (datos['response'] == 'OK') {
          console.log("correcto perfil");

        } else {
          console.log("fallo perfil");
        }
      }
    );
  }

}
