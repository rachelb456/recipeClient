import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { recipes } from '../classes/recipes';
import { DatielsService } from '../servises/datiels.service';


@Component({
  selector: 'app-datiels',
  templateUrl: './datiels.component.html',
  styleUrls: ['./datiels.component.css']
})
export class DatielsComponent implements OnInit{
  receivedData: any;
  constructor(public route: ActivatedRoute, public DatielsSer: DatielsService) { }
  ngOnInit(): void {
   // this.route.getCurrentNavigation().extras.state
    debugger
    this.receivedData = this.route.snapshot.params["state"];
    console.log(this.receivedData);
    
  }
 
}

