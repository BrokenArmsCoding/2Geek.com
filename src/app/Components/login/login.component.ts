import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  Usuario: FormGroup;
  Idioma: string;

  user: any = {
    nick: String,
    password: String
  }

  constructor(private formBuilder: FormBuilder, public router: Router, private BD: ServicesService) { }

  ngOnInit(): void {
    this.Usuario = this.formBuilder.group({
      nick: ['', Validators.required],
      password: ['', Validators.required]
    });
    localStorage.clear();
  }

  ngAfterContentInit(): void {
    if (sessionStorage.getItem("switch") != "switch") {
      sessionStorage.setItem("Idioma", "SP");
    }
    this.Idioma = sessionStorage.getItem("Idioma");
  }

  get Data() {
    return this.Usuario.controls;
  }

  gotoPerfil() {
    this.router.navigate(['Perfil']);
  }

  LoginUsuario() {

    this.user.nick = this.Data.nick.value;
    this.user.password = this.Data.password.value;

    this.BD.loginUser(this.user).subscribe(
      datos => {
        if (datos['response'] == 'OK') {
          environment.vsession = this.user.nick;
          localStorage.setItem("User", environment.vsession);
          Swal.fire('Login correcto', ' ');
          this.router.navigate(['/PaginaInicio']);
        } else {
          Swal.fire('Login erroneo', '');
        }
      }
    )
  }

  cambio_idioma(op: string): void {

    if (op == "SP") {
      this.Idioma = "SP";
      sessionStorage.setItem("Idioma", op);
    }
    if (op == "EN") {
      this.Idioma = "EN";
      sessionStorage.setItem("Idioma", op);
    }
  }

}
