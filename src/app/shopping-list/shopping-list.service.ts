import { Ingredient } from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>()
    private _ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient( 'Tomatoes', 10),
    ];

    getIngredients() {
        return this._ingredients.slice(); // return copy of ingredients
    }

    addIngredient(ingredient: Ingredient) {
        this._ingredients.push(ingredient);
        this.ingredientsChanged.emit(this._ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
      /*for (let ingredient of ingredients) {
        this.addIngredient(ingredient);
      }*/
      this._ingredients.push(...ingredients);
      this.ingredientsChanged.emit(this._ingredients.slice());
    }
}
