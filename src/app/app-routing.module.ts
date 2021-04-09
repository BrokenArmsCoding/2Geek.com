import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComentariosComponent } from './Components/comentarios/comentarios.component';
import { ComunidadComponent } from './Components/comunidad/comunidad.component';
import { HeaderComponent } from './Components/header/header.component';
import { LoginComponent } from './Components/login/login.component';
import { PaginaInicioComponent } from './Components/pagina-inicio/pagina-inicio.component';
import { PerfilMainComponent } from './Components/perfil-main/perfil-main.component';
import { PerfilUsuarioComponent } from './Components/perfil-usuario/perfil-usuario.component';
import { PostComponent } from './Components/post/post.component';
import { RegistroComponent } from './Components/registro/registro.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'comentarios', component: ComentariosComponent},
  { path: 'comunidad', component: ComunidadComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'PaginaInicio', component: PaginaInicioComponent},
  { path: 'PerfilMain', component: PerfilMainComponent},
  { path: 'PerfilUsuario', component: PerfilUsuarioComponent},
  { path: 'Post', component: PostComponent},
  { path: 'Registro', component: RegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
