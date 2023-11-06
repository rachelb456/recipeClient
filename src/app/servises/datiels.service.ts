import { Injectable } from '@angular/core';
import { recipes } from '../classes/recipes';

@Injectable({
  providedIn: 'root'
})
export class DatielsService {
  obj: recipes = new recipes()
 // url: string = `http://localhost:1234/images/${this.obj.pic}.jpg`
  
  constructor() { }
}
