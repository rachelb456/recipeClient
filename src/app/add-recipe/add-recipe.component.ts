import { Component, ViewChild, ElementRef } from '@angular/core';
import { ingredients } from '../classes/ingredients';
import { UsersService } from '../servises/users.service';
import { recipes } from '../classes/recipes';
import { RecipesService } from '../servises/recipes.service';
// import { FormArray } from '@angular/forms';


@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {
  constructor(public ser: UsersService, public resser: RecipesService) { }
  arrIngredients: Array<ingredients> = new Array<ingredients>()
  
  amount: string = ""
  name: string = ""
 
  recipe: recipes = new recipes()
  
  @ViewChild('inputContainer', { static: true })
  inputContainer!: ElementRef;

  inputs: HTMLInputElement[] = [];

  addInputs() {
    //פונקציה שמוסיפה תגיות אינפוט
    const input1 = document.createElement('input');
    input1.type = 'text';
    input1.placeholder = "הכנס כמות מוצר"
    const input2 = document.createElement('input');
    input2.type = 'text';
    input2.placeholder = "הכנס שם מוצר"
    const container = this.inputContainer.nativeElement;
    container.appendChild(input1);
    container.appendChild(input2);
    this.inputs.push(input1, input2);
  }

  saveData() {
    debugger
    //פונקציה ששומרת את הנתונים שהוכנסו
    const data = this.inputs.map(input => input.value);
    console.log(data)
    this.arrIngredients.push({  amount: this.amount,name: this.name })
    
    for (let i = 0; i <data.length-1; i += 2)
    {
      this.arrIngredients.push({ amount: data[i+1],name: data[i]}) 
    }
    this.recipe.nameUser = this.ser.user[0].name
    this.recipe.ingredients=this.arrIngredients
  
   //שליחה לשרת
    this.resser.put(this.recipe).subscribe(x => this.resser.arrrecipes=x)
  }

  

}
