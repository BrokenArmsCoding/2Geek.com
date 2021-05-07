import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComentariosComponent } from './Components/comentarios/comentarios.component';
import { ComunidadComponent } from './Components/comunidad/comunidad.component';
import { HeaderComponent } from './Components/header/header.component';
import { LoginComponent } from './Components/login/login.component';
import { PaginaInicioComponent } from './Components/pagina-inicio/pagina-inicio.component';
import { PostComponent } from './Components/post/post.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { PerfilComponent } from './Components/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    ComentariosComponent,
    ComunidadComponent,
    HeaderComponent,
    LoginComponent,
    PaginaInicioComponent,
    PostComponent,
    RegistroComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ShowHidePasswordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
