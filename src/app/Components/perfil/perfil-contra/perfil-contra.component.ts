import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/Services/services.service';
import Swal from 'sweetalert2';
import { Comprobacion } from './Comprobador';

@Component({
  selector: 'app-perfil-contra',
  templateUrl: './perfil-contra.component.html',
  styleUrls: ['./perfil-contra.component.css']
})

export class PerfilContraComponent implements OnInit {

  nick = localStorage.getItem('User');
  Idioma: String;

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

  ngAfterContentInit(): void{
    this.Idioma = sessionStorage.getItem("Idioma");
  }

  get perfdata() {
    return this.PerfilCont.controls;
  }

  Cambiar_Contra(){
    this.updateContrasena.nick = this.nick;
    this.updateContrasena.oldPass = this.PerfilCont.controls.cont.value;
    this.updateContrasena.password = this.PerfilCont.controls.new_cont.value;

    this.DB.selectPasswordeditPerfil(this.updateContrasena).subscribe(
      datos => {
        if (datos['response'] == 'FAIL'){
          this.DB.UpdateContrasena(this.updateContrasena).subscribe();
          Swal.fire('Actualizado Correctamente', '');
        }else{
          Swal.fire('Error al actualizar', '');
        }
      }
    )


  }


  UpdateCont() {
    this.refresh();
  }

  refresh(): void {
    window.location.reload();
  }


}
