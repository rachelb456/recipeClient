import { Injectable } from '@angular/core';
import { recipes } from '../classes/recipes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  baseUrl: string = 'http://localhost:1234/recipes/'
  arrrecipes: Array<recipes> = new Array<recipes>()
//  rec:recipes=new recipes()

  constructor(public httpclient: HttpClient) { }
//קבלת כל המתכונים
  getAll(): Observable<Array<recipes>> {
    return this.httpclient.get<Array<recipes>>(`${this.baseUrl}getAll`)

  }
  //הוספת מתכון
  put(recipes: recipes): Observable<Array<recipes>> {
    return this.httpclient.put<Array<recipes>>(`${this.baseUrl}add`, recipes)
  }
  //קבלת מתכון לפי שם מתכון
  n:any
  getbyname(name?: string): Observable<Array<recipes>>{
    this.n=name
    return this.httpclient.get<Array<recipes>>(`${this.baseUrl}getByName/${this.n}`)
  }
  //מחיקת מתכון
  name: any
  nameUser:any
  dell(name?: string,nameUser?:string): Observable<Array<recipes>> {
    this.name = name
    this.nameUser=nameUser
    return this.httpclient.delete<Array<recipes>>(`${this.baseUrl}dell/${this.name}/${this.nameUser}`)
  }
}