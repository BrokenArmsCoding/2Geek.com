import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComentariosComponent } from './Components/comentarios/comentarios.component';
import { ComunidadComponent } from './Components/comunidad/comunidad.component';
import { HeaderComponent } from './Components/header/header.component';
import { LoginComponent } from './Components/login/login.component';
import { PaginaInicioComponent } from './Components/pagina-inicio/pagina-inicio.component';
import { PerfilMainComponent } from './Components/perfil-main/perfil-main.component';
import { PerfilUsuarioComponent } from './Components/perfil-usuario/perfil-usuario.component';
import { PostComponent } from './Components/post/post.component';
import { RegistroComponent } from './Components/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    ComentariosComponent,
    ComunidadComponent,
    HeaderComponent,
    LoginComponent,
    PaginaInicioComponent,
    PerfilMainComponent,
    PerfilUsuarioComponent,
    PostComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
