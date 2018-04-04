import { Category } from "./category.model";

export class Recipe {
    name: string;
    date?: Date;
    image?: string;
    hasImage?: boolean;
    url: string;
    categories: Category[]; 

  constructor(name: string, image: string, url: string, categories: Category[]) {
        this.name = name;
        this.image = image;
        this.url = url;
        this.date = new Date();
        if (this.image !== undefined && this.image !== null) {
            this.hasImage = true;
    }
      this.categories = categories;
  }
}
