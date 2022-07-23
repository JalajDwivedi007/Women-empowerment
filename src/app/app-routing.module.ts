import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuidelinesComponent } from './static-page/guidelines/guidelines.component';
// import { MainBodyComponent } from './main-body/main-body.component';
import { LoginComponent } from './login/login.component';

import { SignUpComponent } from './sign-up/sign-up.component';
import { CriteriaComponent } from './static-page/criteria/criteria.component';
import { PoliciesLegislationsComponent } from './static-page/policies-legislations/policies-legislations.component';
import { FaqComponent } from './static-page/faq/faq.component';
import { FundingNormsComponent } from './static-page/funding-norms/funding-norms.component';
import { AboutUsComponent } from './static-page/about-us/about-us.component';
import { TrainingComponent } from './training/training.component';
import { TraineeRegisterHomeComponent } from './trainee/trainee-register-home/trainee-register-home.component';
import { TraineeCourseRegComponent } from './trainee/trainee-course-reg/trainee-course-reg.component';
import { TraineeHostelRegComponent } from './trainee/trainee-hostel-reg/trainee-hostel-reg.component';
import { TraineeSukanyaRegComponent } from './trainee/trainee-sukanya-reg/trainee-sukanya-reg.component';
import { NgoCourseRegisterComponent } from './ngo/ngo-course-register/ngo-course-register.component';
import { NgoMwcdRegisterComponent } from './ngo/ngo-mwcd-register/ngo-mwcd-register.component';
import { NgoRegisterHomeComponent } from './ngo/ngo-register-home/ngo-register-home.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'loginAdmin', component: LoginComponent },
  { path: 'loginNGO', component: LoginComponent },
  { path: 'criteriaNGO', component: CriteriaComponent },
  { path: 'poilicy-legislation', component: PoliciesLegislationsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'funding-norms', component: FundingNormsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'guidelines', component: GuidelinesComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'trainee-register-home', component: TraineeRegisterHomeComponent },
  { path: 'trainee-course-reg', component: TraineeCourseRegComponent },
  { path: 'trainee-hostel-reg', component: TraineeHostelRegComponent },
  { path: 'trainee-sukanya-reg', component: TraineeSukanyaRegComponent },
  { path: 'ngo-course-register', component: NgoCourseRegisterComponent },
  { path: 'ngo-mwcd-register', component: NgoMwcdRegisterComponent },
  { path: 'ngo-register-home', component: NgoRegisterHomeComponent }
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
