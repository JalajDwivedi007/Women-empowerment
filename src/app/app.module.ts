import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//app.module.ts
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AdminNgoComponent } from './admin-ngo/admin-ngo.component';

import { NGOTraineeComponent } from './ngo-trainee/ngo-trainee.component';
import { GuidelinesComponent } from './static-page/guidelines/guidelines.component';
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
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { NgoCourseRegisterComponent } from './ngo/ngo-course-register/ngo-course-register.component';
import { NgoMwcdRegisterComponent } from './ngo/ngo-mwcd-register/ngo-mwcd-register.component';
import { NgoRegisterHomeComponent } from './ngo/ngo-register-home/ngo-register-home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TraineeInfoComponent } from './trainee-info/trainee-info.component';
import { AdminTraineeComponent } from './admin-trainee/admin-trainee.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgoInfoComponent } from './ngo-info/ngo-info.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainFooterComponent,
    MainBodyComponent,
    NavbarComponent,
    SignUpComponent,
    LoginComponent,
    MainComponent,
    GuidelinesComponent,
    CriteriaComponent,
    PoliciesLegislationsComponent,
    FaqComponent,
    NGOTraineeComponent,
    FundingNormsComponent,
    AboutUsComponent,
    AdminNgoComponent,
    AboutUsComponent,
    TrainingComponent,
    TraineeRegisterHomeComponent,
    TraineeCourseRegComponent,
    TraineeHostelRegComponent,
    TraineeSukanyaRegComponent,
    ProfilePageComponent,
    NgoCourseRegisterComponent,
    NgoMwcdRegisterComponent,
    NgoRegisterHomeComponent,
    TraineeInfoComponent,
    AdminTraineeComponent,
    HomePageComponent,
    NgoInfoComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
