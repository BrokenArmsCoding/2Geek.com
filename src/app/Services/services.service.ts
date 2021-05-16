import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  nombreComunidad: String;
  descripcionComunidad: String;

  constructor(private http: HttpClient) { }

  selectPrueba(usuario){
    console.log(usuario);
    return this.http.post(`${environment.serverUrl}InsertUsuario.php`, JSON.stringify(usuario));
  }

  createPerfil(usuario){

    return this.http.post(`${environment.serverUrl}InsertUsuario.php`,JSON.stringify(usuario));
  }

  loginUser(usuario){
    console.log(usuario);
    return this.http.post(`${environment.serverUrl}LoginUsuario.php`,JSON.stringify(usuario));
  }

  createComunidad(DatosComunidad){
    return this.http.post(`${environment.serverUrl}CreateComunidad.php`,JSON.stringify(DatosComunidad));
  }

  crearTablaComunidad(DatosComunidad){
    console.log(DatosComunidad);

    return this.http.post(`${environment.serverUrl}CrearTablaComunidad.php`,JSON.stringify(DatosComunidad));
  }

  insertCreadorTablaComunidad(DatosComunidad){
    return this.http.post(`${environment.serverUrl}InsertarCreador.php`,JSON.stringify(DatosComunidad));
  }

  insertTags(DatosComunidad){
    return this.http.post(`${environment.serverUrl}InsertTagsComunidad.php`,JSON.stringify(DatosComunidad));
  }

  selectComunidades(NombreUsuario){
    return this.http.post(`${environment.serverUrl}SelectComunidades.php`,JSON.stringify(NombreUsuario));
  }

  buscadorComunidades(buscarComunidad){
    return this.http.post(`${environment.serverUrl}BuscadorComunidades.php`,JSON.stringify(buscarComunidad));
  }

  insertPost(datosPost){
    return this.http.post(`${environment.serverUrl}InsertPost.php`,JSON.stringify(datosPost));
  }

  selectPost(nombreComunidad){
    return this.http.post(`${environment.serverUrl}SelectPost.php`,JSON.stringify(nombreComunidad));
  }

  insertComentario(comentariosPost){
    return this.http.post(`${environment.serverUrl}InsertComentario.php`,JSON.stringify(comentariosPost));
  }

  selectComentarios(nombreComunidad){
    return this.http.post(`${environment.serverUrl}SelectComentarios.php`,JSON.stringify(nombreComunidad));
  }


  setDatosComunidad(descripcionComunidad,nombreComunidad){
    this.nombreComunidad = nombreComunidad;
    this.descripcionComunidad = descripcionComunidad;
  }

  getNombreComunidad(){
    return this.nombreComunidad;
  }
  getDescripcionComunidad(){
    return this.descripcionComunidad;
  }

  DeleteTags(nombreComunidad){
  return this.http.post(`${environment.serverUrl}DeleteTags.php`,JSON.stringify(nombreComunidad));

  }
  DeleteInfocomunidad(nombreComunidad){
    return this.http.post(`${environment.serverUrl}DeleteInfocomunidad.php`,JSON.stringify(nombreComunidad));

  }
  DeleteTablaComunidad(nombreComunidad){
    return this.http.post(`${environment.serverUrl}DeleteTablaComunidad.php`,JSON.stringify(nombreComunidad));

  }

}
