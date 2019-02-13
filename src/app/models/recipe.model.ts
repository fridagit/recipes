import {Ingredient} from './ingredient.model';
import { Category } from './category.model';

export class Recipe {
  id?: string;
  name: string;
  date?: Date;
  image?: string;
  url: string;
  categories?: Category[];
  description?: string;
  ingredients?: Ingredient[];
}

