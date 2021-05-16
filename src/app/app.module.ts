import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComunidadComponent } from './Components/comunidad/comunidad.component';
import { HeaderComponent } from './Components/header/header.component';
import { LoginComponent } from './Components/login/login.component';
import { PaginaInicioComponent } from './Components/pagina-inicio/pagina-inicio.component';
import { PostComponent } from './Components/post/post.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { PerfilComponent } from './Components/perfil/perfil.component';
import { PerfilEditarComponent } from './Components/perfil/perfil-editar/perfil-editar.component';
import { PerfilContraComponent } from './Components/perfil/perfil-contra/perfil-contra.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';

@NgModule({
  declarations: [
    AppComponent,
    ComunidadComponent,
    HeaderComponent,
    LoginComponent,
    PaginaInicioComponent,
    PostComponent,
    RegistroComponent,
    PerfilComponent,
    PerfilEditarComponent,
    PerfilContraComponent
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
