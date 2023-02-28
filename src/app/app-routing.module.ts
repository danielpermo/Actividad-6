import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewuserComponent } from './components/newuser/newuser.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserViewComponent } from './components/user-view/user-view.component';

const routes: Routes = [
  {path: "", pathMatch: 'full', redirectTo: '/home'},
  {path: "home", component: HomeComponent},
  {path: "newuser", component: UserFormComponent},
  {path: "user/:userId", component: UserViewComponent},
  {path: "updateuser/:userId", component: UserFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
