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

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    PageRegisterComponent
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
