import { Injectable } from '@angular/core';
import { users } from '../classes/users';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  arrusers: Array<users> = new Array<users>()
  user: Array<users> = new Array<users>()
  baseUrl: string = "http://localhost:1234/users/"
  constructor(public httpclient: HttpClient) { }
  n: any
  p: any
  //פונקציה שמחזירה משתמש עי שם וסיסמא
  getByIdAndPas(name?: string, pas?: number): Observable<Array<users>> {
    this.n = name
    this.p = pas
    return this.httpclient.get<Array<users>>(`${this.baseUrl}getByIdAndPas/${this.n}/${this.p}`)
  }
//פונקצית הוספת משתמש
  put(user: users): Observable<Array<users>> {
   debugger
    return this.httpclient.put<Array<users>>(`${this.baseUrl}addd`, user)
  }
}
