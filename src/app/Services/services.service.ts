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



}
