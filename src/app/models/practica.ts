export class Practica {
    private _id: string;
    private _name: string;
    private _image: string;
    private _description: string;
    

    constructor() {
        this._id = "";
        this._name = "";
        this._image = "";
        this._description = "";
    }

    //Getters

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get image(): string {
        return this._image;
    }

    get description(): string {
        return this._description;
    }

    //Setters

    set id(id: string) {
        this._id = id;
    }

    set name(name: string) {
        this._name = name;
    }

    set image(image: string) {
        this._image = image;
    }

    set description(description: string) {
        this._description = description;
    }

}
