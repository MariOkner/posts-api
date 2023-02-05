//1
// let foo = 'str';
// foo = 12;
// console.log(foo);
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
// //типи полів прописуємо
// class Person implements IPerson, ITutor {
//   public firstname: string;
//   public lastname: string;
//   public age: number;
//   public birthDate = new Date();
//   public isTutor: boolean;
//   public course: string;
//   private salary: number;
//   //в () передаємо аргументи, this - присвоюємо поля-значення
//   constructor(
//     firstname: string,
//     lastname: string,
//     age: number,
//     isTutor: boolean,
//     course: string,
//     salary: number
//   ) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.age = age;
//     this.isTutor = isTutor;
//     this.course = course;
//     this.salary = salary;
//   }
// }
// const person = new Person('Marina', 'Petrenko', 39, true, 'node.js', 9999);
// console.log(person.salary);
//6 скорочений варіант запису прикладу 5
var Person = /** @class */ (function () {
    function Person(firstname, lastname, age, isTutor, course, salary) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.isTutor = isTutor;
        this.course = course;
        this.salary = salary;
        this.birthDate = new Date();
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstname, " ").concat(this.lastname);
    };
    return Person;
}());
var Programer = /** @class */ (function (_super) {
    __extends(Programer, _super);
    // birthDate = new Date();
    function Programer(firstname, lastname, age, isTutor, course, salary) {
        return _super.call(this, firstname, lastname, age, isTutor, course, salary) || this;
    }
    //   getSalary() {
    //     return this.salary;
    //   }
    Programer.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.getFullName()));
    };
    return Programer;
}(Person));
var person = new Person('Marina', 'Petrenko', 39, true, 'node.js', 9999);
console.log(person);
// person.getFullName();
var programer = new Programer('Marina', 'Petrenko', 39, true, 'node.js', 9999);
programer.greet();
