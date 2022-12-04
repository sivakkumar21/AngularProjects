import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'contact-us', component: ContactUsComponent
  },
  {
    path: 'about-us', component: AboutUsComponent
  },
  {
    path: 'authentication', component: AuthenticationComponent, children: [{
      path: 'login', component: LoginComponent
    },
    {
      path: 'create-account', component: CreateAccountComponent
    },]
  },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
