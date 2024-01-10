import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingInComponent } from './sing-in/sing-in.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuard } from './auth.guard';
import { CheckOutPageComponent } from './check-out-page/check-out-page.component';



const routes: Routes = [
  { path: '', component: SingInComponent },
  { path: 'signin', component: SingInComponent },
  {
    path: 'product',
    loadChildren: () => import('./product-page/product-page.module').then(m => m.ProductPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart-page/cart-page.module').then(m => m.CartPageModule),
    canActivate: [AuthGuard]
  },
  { path: 'home', component: HomePageComponent },
  { path: 'checkout', component: CheckOutPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
