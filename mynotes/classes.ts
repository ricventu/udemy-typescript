class Person {
    name: string; //public
    public lastname: string;
    private type: string;
    protected age: number = 27; // only available from child objects

    constructor(name: string, public username: string) { //create username class property and assign the passed value
        this.name = name;
    }

    printAge() {
        console.log(this.age);
        this.setType('');
    }

    protected setType(type:string) {

    }
}

const person = new Person("Rik", 'rik');
console.log(person, person.name, person.username)
person.printAge();

// Inheritance
class Rik extends Person {
    //name: "Rik";  // override

    constructor(username:string) {
        super("rik", username); 
        this.age = 30;
    }
}


// Getter & Setters
class Plant {
    private _species: string;

    get species() {
        return this._species;
    }

    set species(value: string) {     // if set is not specified, the propery ha only get method (read only)
        if (value.length > 3) {
            this._species = value;
        } else {
            this._species = 'default';
        }
    }
}

let plant = new Plant();
plant.species = 'ABCD';
console.log(plant.species);


// Static Properties & Methods
class Helpers {
    static PI: number = 3.14;
    static log(s:any) {
        console.log(s);
    }
}

console.log(Helpers.PI);
Helpers.log(Helpers.PI);


// Abstract classes
abstract class Project {
    prop1: string = 'default';

    abstract abMethod(): number;

    method() {
    }
}

class ITProject extends Project {
    abMethod() {
        return 1;
    }
}

// Private constructor - singleton
class OnlyOne {
    private static instance: OnlyOne;

    private constructor(public readonly name: string) {} //readonly make properties read only

    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    }
}