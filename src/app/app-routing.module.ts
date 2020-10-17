import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './menu/menu.module#MenuPageModule'
  },
  {
    path: 'home/:id',
    loadChildren: () => import('./productpages/product-details/product-details.module').then( m => m.ProductDetailsPageModule)
  },
  {
    path: 'store-details',
    loadChildren: () => import('./storepages/store-details/store-details.module').then( m => m.StoreDetailsPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }