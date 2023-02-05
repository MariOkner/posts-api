//1
// let foo = 'str';
// foo = 12;
// console.log(foo);

// let bar = 42;
// bar = true;

//2
// let foo: string[];
// let bar: number[];
// foo = ['str', 'foo'];
// bar = [5, 24, 25];

// let foo: number;
// let foo: boolean;
// let foo: undefined;
// let foo: null;
// let foo: object;

//3 function
// function customConcat(arg1: string, arg2: string): string {
//   if (Math.random() > 0.5) {
//     return 65;
//   }
//   return 'string';
// }

// //union type
// let subscription: 'starter' | 'business' | 'pro';
// let bar: number | string | boolean;
// subscription = 'str';

// const result = customConcat();

// if(typeof result === ) {
//     result.split();
// };

//4 type alies
// type TSubscriptions = 'starter' | 'business' | 'pro';

// let foo: TSubscriptions;
// foo = 'starter';

// //оголошення типу обєкту
// interface IPerson {
//   firstname: string;
//   lastname: string;
//   age: number;
//   //   getfullName: (arg1: string, arg2: string) => string;
//   //   getfullName: () => string;
//   getfullName?: () => string; //метод не є обовязковим
//   //   getfullName: () => voit; //функція нічого не повертає
// }

// const person: IPerson = {
//   firstname: 'Marina',
//   lastname: 'Petrenko',
//   age: 39,
//   //   getfullName() {

//   //   },
// };

//5 class
interface IPerson {
  firstname: string;
  lastname: string;
  age: number;
  //   getfullName: (arg1: string, arg2: string) => string;
  //   getfullName: () => string;
  //   getfullName?: (arg1) => string; //метод не є обовязковим
  //   getfullName: () => voit; //функція нічого не повертає
}

interface IPerson {
  birthDate: Date;
}

interface ITutor {
  isTutor: boolean;
  course: string;
}
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
class Person implements IPerson, ITutor {
  birthDate = new Date();
  constructor(
    public firstname: string,
    public lastname: string,
    public age: number,
    public isTutor: boolean,
    public course: string,
    private salary: number
  ) {}

  protected getFullName() {
    return `${this.firstname} ${this.lastname}`;
  }
}

class Programer extends Person {
  // birthDate = new Date();
  constructor(
    firstname: string,
    lastname: string,
    age: number,
    isTutor: boolean,
    course: string,
    salary: number
  ) {
    super(firstname, lastname, age, isTutor, course, salary);
  }

  //   getSalary() {
  //     return this.salary;
  //   }

  greet() {
    console.log(`Hello, my name is ${this.getFullName()}`);
  }
}

const person = new Person('Marina', 'Petrenko', 39, true, 'node.js', 9999);
console.log(person);
// person.getFullName();

const programer = new Programer(
  'Marina',
  'Petrenko',
  39,
  true,
  'node.js',
  9999
);
programer.greet();
