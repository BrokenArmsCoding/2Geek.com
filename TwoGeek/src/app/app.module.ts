import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { ComunidadComponent } from './comunidad/comunidad.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { PerfilMainComponent } from './perfil-main/perfil-main.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { PostComponent } from './post/post.component';
import { RegistroComponent } from './registro/registro.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
