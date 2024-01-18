class Animal {
    get eyeColor() {
        return this._eyeColor
    }
    set eyeColor(value) {
        this._eyeColor = value
    }
    get hairColor() {
        return this._hairColor
    }
    set hairColor(value) {
        this._hairColor = value
    }
}

let dog = new Animal();
dog.eyeColor = "Black";
console.log(dog.hairColor)