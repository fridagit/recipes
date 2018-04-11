import {Ingredient} from './ingredient.model';

export class Recipe {
  name: string;
  date?: Date;
  image?: string;
  url: string;
  categories: String[];
  description?: string;
  ingredients?: Ingredient[];
}

