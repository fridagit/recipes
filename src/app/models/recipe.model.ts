export class Recipe {
    name: string;
    date?: Date;
    image?: string;
    hasImage?: boolean;

    constructor(name: string) {
        this.name = name;
        this.date = new Date();
    }
}
