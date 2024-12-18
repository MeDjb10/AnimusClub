import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/dynamic/login/login.component';
import { NavbarComponent } from './components/fixed/navbar/navbar.component';

import { HomeComponent } from './components/dynamic/home/home.component';
import { IntroductionComponent } from './components/dynamic/introduction/introduction.component';

import { LoginDivComponent } from './components/dynamic/login-div/login-div.component';
import { SignupDivComponent } from './components/dynamic/signup-div/signup-div.component';
import { LandingPageComponent } from './components/dynamic/landing-page/landing-page.component';

import {HttpClientModule} from "@angular/common/http";
import { FormationListComponent } from './components/dynamic/formation-list/formation-list.component';
import { FormationComponent } from './components/dynamic/formation/formation.component';
import { SelectedFormationComponent } from './components/dynamic/selected-formation/selected-formation.component';
import { MainComponent } from './components/dynamic/main/main.component';
import { AboutUsComponent } from './components/dynamic/about-us/about-us.component';

import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dynamic/dashboard/dashboard.component';
import { AdmiNavBarComponent } from './components/fixed/admi-nav-bar/admi-nav-bar.component';


import { UserListComponent } from './components/dynamic/user-list/user-list.component';
import { StaticsComponent } from './components/dynamic/statics/statics.component';
import { AdminFormationListComponent } from './components/dynamic/admin-formation-list/admin-formation-list.component';

import { AdminFormtionFormComponent } from './components/dynamic/admin-formtion-form/admin-formtion-form.component';
import { AdminSideBarComponent } from './components/fixed/admin-side-bar/admin-side-bar.component';

import { UserPageComponent } from './components/dynamic/user-page/user-page.component';

import { ChangePasswordComponent } from './components/dynamic/change-password/change-password.component';


import { UserTrainingsComponent } from './components/dynamic/user-trainings/user-trainings.component';
import { UserConfigComponent } from './components/dynamic/user-config/user-config.component';
import { EmailChangerPipe } from './pipe/email-changer.pipe';
import { ApiComponent } from './components/dynamic/api/api.component';
import { PokemonComponen } from './components/dynamic/pokemon/pokemon.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    IntroductionComponent,
    LoginDivComponent,
    SignupDivComponent,
    LandingPageComponent,
    FormationListComponent,
    FormationComponent,
    SelectedFormationComponent,
    MainComponent,
    AboutUsComponent,
    DashboardComponent,
    AdmiNavBarComponent,
    AdminSideBarComponent,
    UserListComponent,
    StaticsComponent,
    AdminFormationListComponent,
    AdminFormtionFormComponent,
    UserPageComponent,
    ChangePasswordComponent,
    UserTrainingsComponent,
    UserConfigComponent,
    EmailChangerPipe,
    ApiComponent,
    PokemonComponen
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
