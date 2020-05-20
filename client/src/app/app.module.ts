import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthLayoutComponent } from './shared/layout/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './shared/layout/site-layout/site-layout.component';
import { PageRegisterComponent } from './page-register/page-register.component';
import { TokenInterceptor } from './shared/classes/token.interceptor';
import { PageOverviewComponent } from './page-overview/page-overview.component';
import { PageAnalyticsComponent } from './page-analytics/page-analytics.component';
import { PageHistoryComponent } from './page-history/page-history.component';
import { PageOrderComponent } from './page-order/page-order.component';
import { PageCategoriesComponent } from './page-categories/page-categories.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { CategoriesFormComponent } from './page-categories/categories-form/categories-form.component';
import { PositionsFormComponent } from './page-categories/categories-form/positions-form/positions-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    PageRegisterComponent,
    PageOverviewComponent,
    PageAnalyticsComponent,
    PageHistoryComponent,
    PageOrderComponent,
    PageCategoriesComponent,
    LoaderComponent,
    CategoriesFormComponent,
    PositionsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
