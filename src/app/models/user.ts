/**
 * Notice the use of interfaces, not classes here.
 */
export class User {

    id: number;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    email: string;
    addresses: any[];


    constructor(id:number, firstName: string, lastName: string, username: string, password: string, email: string, addresses: any[]) {
        this.id = id;
        this.firstName= firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.email = email;
        this.addresses = addresses;
    }


}

export class Address {

    street: string;
    secondary: string;
    state: string;
    city: string;

    constructor( street: string, secondary: string, state: string, city: string) {
        
        this.street = street,
        this.secondary = secondary,
        this.state = state, 
        this.city = city;
    }
}


/**
 * https://stackoverflow.com/questions/54356711/when-to-use-class-or-interface-in-angular-project
 *
 * You're correct. Interfaces are great when you only need the type checking whereas classes are great when you not only want the type checking, but you need some methods or require some other logic.

Personally, I always start with just using an interface, and once I need some methods, I'll add a class and inherit the interface. I would also add that I prefer to always have an interface whether you're using a class or not. This allows you to pass around/inject the interface instead of having to re-instantiate class multiple times.

Here is an example of a typical pattern I would follow if I need some methods (which means I need a class)

interface IPerson {
    firstName: string;
    lastName: string;
    age: number;
    getFullName(): string;
}
class Person implements IPerson {
    public firstName: string;
    public lastName: string;
    public age: number;
    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
}

const person: IPerson = new Person('John', 'Doe', 44);
 */