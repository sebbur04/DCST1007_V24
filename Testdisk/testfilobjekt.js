//Objektorientert Programeriming Introduction
const person = {
  name: "Sebastian",
  age: 19,
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
};

person.greet(); // Output: Hello, my name is {Sebastian} and I'm {19} years old.