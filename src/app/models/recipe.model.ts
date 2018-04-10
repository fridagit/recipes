import { Ingredient } from './ingredient.model';

export class Recipe {
    name: string;
    date?: Date;
    image?: string;
    hasImage?: boolean;
    url: string;
    categories: String[];
    description?: string;
    ingredients?: Ingredient[];
}

