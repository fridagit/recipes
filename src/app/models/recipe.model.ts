import { Category } from "./category.model";
import { Ingredient } from "./ingredient.model";

export class Recipe {
    name: string;
    date?: Date;
    image?: string;
    hasImage?: boolean;
    url: string;
    categories: Category[];
    description: string;
    ingredients: Ingredient[];

    constructor(name: string, image: string, url: string, description: string, categories: Category[], ingredients: Ingredient[]) {
        this.name = name;
        this.image = image;
        this.url = url;
        this.date = new Date();
        if (this.image !== undefined && this.image !== null) {
            this.hasImage = true;
        }
        this.description = description;
        this.ingredients = ingredients;
        this.categories = categories;
    }
}

