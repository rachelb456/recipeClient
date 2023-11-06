import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DatielsComponent } from './datiels/datiels.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';

const routes: Routes = [
  {
    // path: '', component: NavComponent,  children: [
    
       path: "home", component: HomePageComponent },
       { path: "datiels", component: DatielsComponent } ,
      // { path: "datiels/:data", component: DatielsComponent },
      { path: "register", component: RegisterComponent },
      { path: "login", component: LoginComponent },
      { path: "addrecipe", component: AddRecipeComponent }
  
    // ],
  ,
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
