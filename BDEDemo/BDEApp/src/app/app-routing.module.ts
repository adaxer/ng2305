import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { canLoadAdmin } from './app.guard';

const routes: Routes = [
  { path: 'home', component: WelcomeComponent },
  { path: 'admin', canMatch: [canLoadAdmin], loadChildren: ()=> import('./admin/admin.module').then(m=>m.AdminModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
