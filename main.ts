export {}

let message = 'Welcome Back';
console.log(message);

let x = 10;
const y = 20;

const title = 'Codevolution'

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Vishwas';

// can also use template literals

let sentence: string = `My name is ${name}
I am a beginner in Typescript`;

console.log(sentence)

let n: null = null;
let u: undefined = undefined; 

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
// they are the same, you choose

let person1: [string, number] = ['Chris', 22]
// fixed number of values and ordered

// enum Color {Red, Green, Blue};

// let c: Color = Color.Green;
// console.log(c)
// you can specify the number at the enum declaration

enum Color {Red = 5, Green, Blue};
let c: Color = Color.Green;
console.log(c)

let randomValue: any = 10;
randomValue = true;
randomValue = 'Vishwas';

// any type is most capable type, anything can be done

let myVariable2: unknown = 10;

function hasName(obj: any): obj is {name:string} {
    return !!obj &&
        typeof obj === `object` &&
        'name' in obj
    }

if (hasName(myVariable2)) {
    console.log(myVariable2.name)
}

(myVariable2 as string).toUpperCase
// this was a type cohersion, because unknown is not doable

let a;
a = 10;
a = true;

let b = 20;
// IT KNOWS! type was infered because variable was initialized

let multiType: number | boolean;
multiType = 20;
multiType = true;

// good when data comes from somewhere in a weird shape

let anyType: any;
anyType = 20;
anyType = true;

// could do lots of anyType but you lose INTELLISENSE 

function add(num1, num2) {
    return num1 + num2;
}

// regular js function

function add1(num1: number, num2: number): number {
    return num1 + num2;
}

add1(5, 10);
// add1(5, '10'); // <- oops, it doesnt work really well because it expects number

// also intelisense will help you know what to add to functions and what it returns

function add2(num1: number, num2?: number): number {
    if (num2)
        return num1 + num2;
    else
        return num1;
}

add2(5, 10);
add2(5);

// this makes the number optional

function add3(num1: number, num2: number = 10): number {
    if (num2)
        return num1 + num2;
    else
        return num1;
}

console.log(add3(5, 10))
console.log(add3(5))

// this makes the number default in case it is not provided

function fullName(person: {firstName: string, lastName: string}) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
}

fullName(p);

interface Person {
    firstName: string;
    lastName: string;
}

function fullName2(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`)
}

// can be used everywhere, also allows optional with ?
// good use case can be form handling with fields that are not obligatory

class Employee {
    protected employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`)
    }
}

let emp1 = new Employee('Vishwas');
console.log(emp1.employeeName)
emp1.greet();

// different from original js classes

class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName)
    }
    delegateWork() {
        console.log(`Manager delegating tasks`, this.employeeName);
    }
}

let m1 = new Manager(`Bruce`);
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

// public, private and protected class for variables

// public can be used everywhere
// private can`t be used everywhere, even in derived class (extended)
// protected allows access in extended classes as well

