"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Welcome Back';
console.log(message);
var x = 10;
var y = 20;
var title = 'Codevolution';
var isBeginner = true;
var total = 0;
var name = 'Vishwas';
// can also use template literals
var sentence = "My name is " + name + "\nI am a beginner in Typescript";
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// they are the same, you choose
var person1 = ['Chris', 22];
// fixed number of values and ordered
// enum Color {Red, Green, Blue};
// let c: Color = Color.Green;
// console.log(c)
// you can specify the number at the enum declaration
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = 'Vishwas';
// any type is most capable type, anything can be done
var myVariable2 = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        'name' in obj;
}
if (hasName(myVariable2)) {
    console.log(myVariable2.name);
}
myVariable2.toUpperCase;
// this was a type cohersion, because unknown is not doable
var a;
a = 10;
a = true;
var b = 20;
// IT KNOWS! type was infered because variable was initialized
var multiType;
multiType = 20;
multiType = true;
// good when data comes from somewhere in a weird shape
var anyType;
anyType = 20;
anyType = true;
// could do lots of anyType but you lose INTELLISENSE 
function add(num1, num2) {
    return num1 + num2;
}
// regular js function
function add1(num1, num2) {
    return num1 + num2;
}
add1(5, 10);
// add1(5, '10'); // <- oops, it doesnt work really well because it expects number
// also intelisense will help you know what to add to functions and what it returns
function add2(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add2(5, 10);
add2(5);
// this makes the number optional
function add3(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log(add3(5, 10));
console.log(add3(5));
// this makes the number default in case it is not provided
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
function fullName2(person) {
    console.log(person.firstName + " " + person.lastName);
}
// can be used everywhere, also allows optional with ?
// good use case can be form handling with fields that are not obligatory
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Vishwas');
console.log(emp1.employeeName);
emp1.greet();
// different from original js classes
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks", this.employeeName);
    };
    return Manager;
}(Employee));
var m1 = new Manager("Bruce");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
// public, private and protected class for variables
// public can be used everywhere
// private can`t be used everywhere, even in derived class (extended)
// protected allows access in extended classes as well
