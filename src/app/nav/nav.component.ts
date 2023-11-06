import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../servises/users.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(public myrouter: Router, public ser: UsersService) {

  }
}
