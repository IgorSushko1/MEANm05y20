import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { PageLoginComponent } from './page-login/page-login.component';
import { AuthLayoutComponent } from './shared/layout/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './shared/layout/site-layout/site-layout.component';
import { PageRegisterComponent } from './page-register/page-register.component';
import { AuthGuard } from './shared/classes/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: PageLoginComponent },
      { path: 'register', component: PageRegisterComponent }

    ]
  },
  {
    path: '',
    component: SiteLayoutComponent,
    canActivate: [AuthGuard],
    children: []
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }