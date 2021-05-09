import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Usuario: FormGroup;

  constructor(private formBuilder: FormBuilder, public router: Router) { }

  ngOnInit(): void {

    this.Usuario = this.formBuilder.group({
      nick: ['', Validators.required],
      cont: ['', Validators.required]
    });
  }

  get Data() {
    return this.Usuario.controls;
  }

  gotoPerfil() {
    this.router.navigate(['Perfil']);
  }

}
