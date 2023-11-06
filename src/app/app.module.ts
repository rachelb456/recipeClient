import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DatielsComponent } from './datiels/datiels.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';

import { ShowtxtDirective } from './showtxt.directive';

@NgModule({
  //שמות המחלקות של כל הקומפוננטות
  declarations: [
    AppComponent,
    NavComponent,
    HomePageComponent,
    DatielsComponent,
    RegisterComponent,
    LoginComponent,
    AddRecipeComponent,
    ShowtxtDirective
  ],
  //שמות הספריות החיצוניות שיבאנו לפרויקט
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  //כל הסרוויסים שנגדיר
  providers: [],
  //שם המחלקה של הקומפוננטה שרצה ראשונה
  bootstrap: [AppComponent]
})
export class AppModule { }
