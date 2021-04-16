import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comprobacion } from './Contra_Repetida';
import { Router } from '@angular/router';
//import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {

  Usuario: FormGroup;

  constructor(private formBuilder: FormBuilder,public router: Router) { }

  ngOnInit(): void {

    this.Usuario = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fecha_nazimiento: ['', Validators.required],
      nick: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9_]+')]],
      correo: ['', [Validators.required, Validators.email]],
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

  Data_Check(){

  }

}
