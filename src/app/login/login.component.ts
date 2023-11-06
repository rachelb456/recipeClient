import { Component } from '@angular/core';
import { UsersService } from '../servises/users.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { formatNumber } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name: string = ""
  pas: number =0
  constructor(public http: HttpClient, public ser: UsersService, public navigate: Router) { }
  
  chec()
  {
    debugger
    this.ser.getByIdAndPas(this.name, this.pas).subscribe(x => {
      if (x.length != 0)
        this.ser.user = x
      else
        this.navigate.navigate(['register'])

    }
    )
    
   // console.log(l)
  // )
   //this.ser.user = l)
    console.log(this.ser.arrusers);
    
  }

}
