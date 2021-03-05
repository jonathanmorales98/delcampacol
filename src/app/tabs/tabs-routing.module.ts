import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'noticias',
        loadChildren: () => import('../noticias/noticias.module').then(m => m.NoticiasPageModule)
      },
      {
        path: 'mercado',
        loadChildren: () => import('../mercado/mercado.module').then(m => m.MercadoPageModule)
      },
      {
        path: 'publicaciones',
        loadChildren: () => import('../publicaciones/publicaciones.module').then(m => m.PublicacionesPageModule)
      },
      {
        path: 'precios',
        loadChildren: () => import('../precios/precios.module').then(m => m.PreciosPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
