import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComunidadComponent } from './Components/comunidad/comunidad.component';
import { HeaderComponent } from './Components/header/header.component';
import { LoginComponent } from './Components/login/login.component';
import { PaginaInicioComponent } from './Components/pagina-inicio/pagina-inicio.component';
import { PostComponent } from './Components/post/post.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { PerfilComponent } from './Components/perfil/perfil.component';
import { PerfilComunidadComponent } from './Components/comunidad/perfil-comunidad/perfil-comunidad.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Login'},
  { path: 'Login', component: LoginComponent},
  { path: 'Comunidades', component: ComunidadComponent},
  { path: 'PerfilComponente', component: PerfilComunidadComponent},
  { path: 'Header', component: HeaderComponent},
  { path: 'PaginaInicio', component: PaginaInicioComponent},
  { path: 'Perfil', component: PerfilComponent},
  { path: 'Post', component: PostComponent},
  { path: 'Registro', component: RegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
