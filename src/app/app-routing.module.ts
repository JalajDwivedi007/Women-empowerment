import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CriteriaComponent } from './criteria/criteria.component';
// import { MainBodyComponent } from './main-body/main-body.component';
import { LoginComponent } from './login/login.component';
import { PoliciesLegislationsComponent } from './policies-legislations/policies-legislations.component';
import { FundingNormsComponent } from './funding-norms/funding-norms.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'loginAdmin', component: LoginComponent },
  { path: 'loginNGO', component: LoginComponent },
  { path: 'criteriaNGO', component: CriteriaComponent },
  { path: 'poilicy-legislation', component: PoliciesLegislationsComponent },
  {path:'sign-up',component: SignUpComponent},
  {path:'funding-norms',component:FundingNormsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// { path: '', component: HomeComponent },
//   { path: 'products', component: ProductComponent },
//   { path: 'about', component: AboutComponent },
//   { path: 'contact', component: ContactComponent, },
