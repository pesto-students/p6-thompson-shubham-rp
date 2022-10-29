let Person = function () {};

Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

// start - the solution
let Teacher = function () {}; // creates an object

Object.setPrototypeOf(Teacher.prototype, Person.prototype); // inheritance

//teach() function which prints the output

Teacher.prototype.teach = function (subject) {
  console.log(
    this.name + ", aged " + this.age + ", is now teaching " + subject
  );
};

// end

let him = new Teacher();

console.log(him);

him.initialize("Adam", 45);
console.log(him);

him.teach("Inheritance");
