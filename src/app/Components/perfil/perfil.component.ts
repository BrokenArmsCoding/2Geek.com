import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit {

  ModoCambio: String = "Perfil";
  nombreUsuario: String;
  Idioma: String;
  image: String;
  usuario:any = {}

  selectedFiles: any;
  url: any;

  Usuario: any = {}

  constructor(private DB: ServicesService) { }

  ngOnInit(): void {
  this.nombreUsuario = localStorage.getItem('User');
  localStorage.removeItem("NombreComunidad");
  localStorage.removeItem("DescripcionComunidad");
  this.GetUsuario();
  }

  ngAfterContentInit(): void{
    this.Idioma = sessionStorage.getItem("Idioma");
  }

  GetUsuario(){
    this.DB.GetUsuario(this.nombreUsuario).subscribe(
      result => this.usuario = result[0]
    );
  }

  Cambiar_Opcion(op: String): void {
    this.ModoCambio = op;
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
      console.log(this.selectedFiles[0].name);
      this.Usuario.nombre = this.nombreUsuario;
      this.Usuario.imagen = this.selectedFiles[0].name;

      console.log(this.selectedFiles[0])
      this.DB.moverAssets(this.selectedFiles[0]).subscribe()
      this.DB.subirimagen(this.Usuario).subscribe(

      )
    }
    }




}
