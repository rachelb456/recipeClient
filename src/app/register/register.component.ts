import { Component } from '@angular/core';
import { users } from '../classes/users';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../servises/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  /**
   *
   */
  constructor(public http:HttpClient,public ser:UsersService) {
   
  }
  //public newUser: users
  newUser: users = new users()
  // name: string = ""
  // lastName: string = ""
  // pas: number = 0
  // email: string = ""
 // this.newUser.name = name
send()
{
  debugger
  // this.newUser = new users("",this.name,this.pas,this.lastName,this.email)
  //put

  this.ser.put(this.newUser).subscribe(x => this.ser.user=x)
}

}
