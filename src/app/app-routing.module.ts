import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuidelinesComponent } from './guidelines/guidelines.component';
// import { MainBodyComponent } from './main-body/main-body.component';
import { LoginComponent } from './login/login.component';

import { SignUpComponent } from './sign-up/sign-up.component';
import { CriteriaComponent } from './criteria/criteria.component';
// import { MainBodyComponent } from './main-body/main-body.component';

import { PoliciesLegislationsComponent } from './policies-legislations/policies-legislations.component';
import { TraineeRegisterComponent } from './trainee-register/trainee-register.component';
import { AboutUsComponent } from './about-us/about-us.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'loginAdmin', component: LoginComponent },
  { path: 'loginNGO', component: LoginComponent },
  { path: 'criteriaNGO', component: CriteriaComponent },
  { path: 'poilicy-legislation', component: PoliciesLegislationsComponent },
  { path: 'trainee-register', component: TraineeRegisterComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'guidelines', component: GuidelinesComponent },
  { path: 'sign-up', component: SignUpComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
// { path: '', component: HomeComponent },
//   { path: 'products', component: ProductComponent },
//   { path: 'about', component: AboutComponent },
//   { path: 'contact', component: ContactComponent, },
