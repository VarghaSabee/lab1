export class Greetings {

    _name = ""

    constructor(name) {
        this._name = name
    }

    sayHello = () => {

    }

    sayHello2() {
        console.log(`Hello, ${this._name}`)
    }

    toString() {
        return "from toString";
    }
}
