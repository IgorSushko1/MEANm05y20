import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { PageLoginComponent } from './page-login/page-login.component';
import { AuthLayoutComponent } from './shared/layout/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './shared/layout/site-layout/site-layout.component';
import { PageRegisterComponent } from './page-register/page-register.component';
import { AuthGuard } from './shared/classes/auth.guard';
import { PageOverviewComponent } from './page-overview/page-overview.component';
import { PageCategoriesComponent } from './page-categories/page-categories.component';
import { PageOrderComponent } from './page-order/page-order.component';
import { PageHistoryComponent } from './page-history/page-history.component';
import { PageAnalyticsComponent } from './page-analytics/page-analytics.component';
import { CategoriesFormComponent } from './page-categories/categories-form/categories-form.component';
import { OrderCategoriesComponent } from './page-order/order-categories/order-categories.component';
import { OrderPositionsComponent } from './page-order/order-positions/order-positions.component';

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
    children: [
      { path: 'overview', component: PageOverviewComponent },
      { path: 'analytics', component: PageAnalyticsComponent },
      { path: 'history', component: PageHistoryComponent },
      {
        path: 'order', component: PageOrderComponent, children: [
          { path: '', component: OrderCategoriesComponent },
          { path: ':id', component: OrderPositionsComponent }
        ]
      },
      { path: 'categories', component: PageCategoriesComponent },
      { path: 'categories/new', component: CategoriesFormComponent },
      { path: 'categories/:id', component: CategoriesFormComponent },



    ]
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