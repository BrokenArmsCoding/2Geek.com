import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComentariosComponent } from './Components/comentarios/comentarios.component';
import { ComunidadComponent } from './Components/comunidad/comunidad.component';
import { HeaderComponent } from './Components/header/header.component';
import { LoginComponent } from './Components/login/login.component';
import { PaginaInicioComponent } from './Components/pagina-inicio/pagina-inicio.component';
import { PostComponent } from './Components/post/post.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { PerfilComponent } from './Components/perfil/perfil.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Registro'},
  { path: 'login', component: LoginComponent},
  { path: 'comentarios', component: ComentariosComponent},
  { path: 'comunidad', component: ComunidadComponent},
  { path: 'header', component: HeaderComponent},
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
