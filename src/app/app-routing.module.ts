import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPageComponent } from './add-page/add-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewPageComponent } from './view-page/view-page.component';

const routes: Routes = [
  {path: "", redirectTo:"/login", pathMatch:"full"},
  {path: "login", component: LoginComponent, pathMatch:"full"},
  {path: "home", component: HomeComponent},
  {path: "register", component: RegisterComponent},
  {path: "view/:id", component:ViewPageComponent},
  {path: "edit/:id", component: EditPageComponent},
  {path: "add", component: AddPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
