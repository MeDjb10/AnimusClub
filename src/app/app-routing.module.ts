import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/dynamic/login/login.component';
import { LoginDivComponent } from './components/dynamic/login-div/login-div.component';
import { SignupDivComponent } from './components/dynamic/signup-div/signup-div.component';
import { LandingPageComponent } from './components/dynamic/landing-page/landing-page.component';
import { HomeComponent } from './components/dynamic/home/home.component';
import { FormationListComponent } from './components/dynamic/formation-list/formation-list.component';
import { SelectedFormationComponent } from './components/dynamic/selected-formation/selected-formation.component';
import { MainComponent } from './components/dynamic/main/main.component';
import { AboutUsComponent } from './components/dynamic/about-us/about-us.component';

import { DashboardComponent } from './components/dynamic/dashboard/dashboard.component';
import { UserListComponent } from './components/dynamic/user-list/user-list.component';
import { StaticsComponent } from './components/dynamic/statics/statics.component';
import { AdminFormationListComponent } from './components/dynamic/admin-formation-list/admin-formation-list.component';
import { AdminFormtionFormComponent } from './components/dynamic/admin-formtion-form/admin-formtion-form.component';
import { ChangePasswordComponent } from './components/dynamic/change-password/change-password.component';
import { UserPageComponent } from './components/dynamic/user-page/user-page.component';
import { UserConfigComponent } from './components/dynamic/user-config/user-config.component';
import { UserTrainingsComponent } from './components/dynamic/user-trainings/user-trainings.component';
import { AuthGuard } from './guard/auth.guard';
import { adminGuard } from './guard/admin.guard';
import { ApiComponent } from './components/dynamic/api/api.component';



const routes: Routes = [
  { path: 'landingpage', title: 'Welcome', component: LandingPageComponent },
  {
    path: 'loginpage',
    title: 'LoginPage',
    component: LoginComponent,
    children: [
      { path: 'login', title: 'Login', component: LoginDivComponent },
      { path: 'signup', title: 'Sign Up', component: SignupDivComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  {
    path: 'formationList',
    title: 'Formation',
    component: FormationListComponent,
  },
  {
    path: 'formationList/:idf',
    title: 'FormationDetail',
    component: SelectedFormationComponent,
  },

  {
    path: 'dashboard',
    title: 'Dashboard',
    component: DashboardComponent,
    canActivate: [adminGuard],
    children: [
      {
        path: 'statics',
        title: 'statics',
        component: StaticsComponent,
      },
      {
        path: 'usersList',
        title: 'usersList',
        component: UserListComponent,
      },
      {
        path: 'ActivityList',
        title: 'ActivityList',
        component: AdminFormationListComponent,
      },
      {
        path: 'form',
        component: AdminFormtionFormComponent,
      },
      {
        path: 'form/:id',
        component: AdminFormtionFormComponent,
      },
      {
        path: 'ChangePwd',
        title: 'Change Password',
        component: ChangePasswordComponent,
      },
      { path: '', redirectTo: 'statics', pathMatch: 'full' },
    ],
  },
  {
    path: 'home',
    title: 'Home',
    component: HomeComponent,
    children: [
      {
        path: 'main',
        title: 'main',
        component: MainComponent,
      },
      {
        path: 'events',
        title: 'events',
        component: FormationListComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'aboutUs',
        title: 'About Us',
        component: AboutUsComponent,
      },
      {
        path: 'api',
        title: 'API',
        component: ApiComponent,
      },
      {
        path: 'user', title: 'My Account', component: UserPageComponent, canActivate: [AuthGuard], children: [
          {
            path: 'uConfig', component: UserConfigComponent,
          },
          {
            path: 'uTrainings', component: UserTrainingsComponent,
          },
          { path: '', redirectTo: 'uTrainings', pathMatch: 'full' },
        ]
      },
      { path: '', redirectTo: 'main', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: 'landingpage', pathMatch: 'full' },
  { path: '**', redirectTo: 'landingpage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
