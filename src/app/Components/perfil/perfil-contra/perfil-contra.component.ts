import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/Services/services.service';
import { Comprobacion } from './Comprobador';

@Component({
  selector: 'app-perfil-contra',
  templateUrl: './perfil-contra.component.html',
  styleUrls: ['./perfil-contra.component.css']
})

export class PerfilContraComponent implements OnInit {

  nick = localStorage.getItem('User');

  updateContrasena: any = {
    nick: null,
    password: null
  }


  PerfilCont: FormGroup;
  constructor(private formBuilder: FormBuilder, private DB: ServicesService) { }

  ngOnInit(): void {
    this.PerfilCont = this.formBuilder.group({
      cont: ['', Validators.required],
      new_cont: ['', Validators.required],
      rep_cont: ['', Validators.required],
    },
    { validator: Comprobacion('new_cont', 'rep_cont')});
  }

  get perfdata() {
    return this.PerfilCont.controls;
  }

  Cambiar_Contra(){
    this.updateContrasena.nick = this.nick;
    this.updateContrasena.password = this.PerfilCont.controls.new_cont.value;

    this.DB.UpdateContrasena(this.updateContrasena).subscribe();
  }

  UpdateCont() {
    this.refresh();
  }

  refresh(): void {
    window.location.reload();
  }


}
