import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanLoad } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailsComponent } from './products/product-details.component';
import { AppGuard } from './app.guard';

const routes: Routes = [
  { path: 'home', component: WelcomeComponent },
  { path: 'admin', canLoad: [AppGuard], loadChildren: ()=> import('./admin/admin.module').then(m=>m.AdminModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
