import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipesService } from '../servises/recipes.service';
import { Router } from '@angular/router';
import { recipes } from '../classes/recipes';
import { DatielsService } from '../servises/datiels.service';

@Component({
  // selector: 'app-nav',
  // templateUrl: './nav.component.html',
  // styleUrls: ['./nav.component.css']
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  ll: any= { message: 'Hello, world!' };
 //ctor;
  
  constructor(public http: HttpClient, public ser: RecipesService, public navigate: Router, public DatielsSer: DatielsService) {
    
  }
//dsa:string="gjh"
  //בעת טעינה שליפת כל המתכונים
  ngOnInit(): void {
    this.ser.getAll().subscribe(l => this.ser.arrrecipes = l)
  }
  datiels(bb:any)
  {
   //this.st=data
    
    debugger
    this.DatielsSer.obj=bb
    this.navigate.navigate([`datiels`])//, {state:bb})
    
  }

}
