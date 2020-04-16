import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>()
    private _ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient( 'Tomatoes', 10),
    ];

    getIngredients() {
        return this._ingredients.slice(); // return copy of ingredients
    }

    addIngredient(ingredient: Ingredient) {
        this._ingredients.push(ingredient);
        this.ingredientsChanged.next(this._ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
      this._ingredients.push(...ingredients);
      this.ingredientsChanged.next(this._ingredients.slice());
    }
}
