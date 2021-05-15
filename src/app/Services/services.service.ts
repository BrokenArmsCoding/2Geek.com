import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

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



}
