import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { MainBodyComponent } from './main-body/main-body.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent }
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
