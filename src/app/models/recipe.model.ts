export class Recipe {
    name: string;
    date?: Date;
    image?: string;
    hasImage?: boolean;
    url: string;

    constructor(name: string, image: string, url:string) {
        this.name = name;
        this.image = image;
        this.url = url;
        this.date = new Date();
        if (this.image !== undefined && this.image !== null) {
            this.hasImage = true;
        }
    }
}
