import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'registrto',
    loadChildren: () => import('./registrto/registrto.module').then( m => m.RegistrtoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'mercado',
    loadChildren: () => import('./mercado/mercado.module').then( m => m.MercadoPageModule)
  },
  {
    path: 'publicaciones',
    loadChildren: () => import('./publicaciones/publicaciones.module').then( m => m.PublicacionesPageModule)
  },
  {
    path: 'precios',
    loadChildren: () => import('./precios/precios.module').then( m => m.PreciosPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'nueva-publicacion',
    loadChildren: () => import('./nueva-publicacion/nueva-publicacion.module').then( m => m.NuevaPublicacionPageModule)
  },
  {
    path: 'nueva-publicacion/:type/:name',
    loadChildren: () => import('./nueva-publicacion/nueva-publicacion.module').then( m => m.NuevaPublicacionPageModule)
  },
  {
    path: 'configuraciones',
    loadChildren: () => import('./configuraciones/configuraciones.module').then( m => m.ConfiguracionesPageModule)
  },
  {
    path: 'index-cosechador',
    loadChildren: () => import('./index-cosechador/index-cosechador.module').then( m => m.IndexCosechadorPageModule)
  },
  {
    path: 'index-comerciante',
    loadChildren: () => import('./index-comerciante/index-comerciante.module').then( m => m.IndexComerciantePageModule)
  },
  {
    path: 'index-comprador',
    loadChildren: () => import('./index-comprador/index-comprador.module').then( m => m.IndexCompradorPageModule)
  },  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}


// 04/05/2021
// duplique el patch de nueva publicacion y a la copia le paso dos valores