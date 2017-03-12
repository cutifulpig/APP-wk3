//class

'use strict'
class Person{
  constructor(name){
    this.name=name;
  }
  printGreeting(){
    console.log(`i am ${this.name}`);
  }
}

var person1=new Person('andrew');
person1.printGreeting();

var person2=new Person('mike');
person2.printGreeting();





//extand

class Employee extends Person{
  constructor(name,job){
    super(name);
    this.job=job;
  }
  printGreeting(){
    super.printGreeting();
    console.log(`i am ${this.name} and i am a ${this.job}`);
  }
}

var person1=new Employee('andrew','teacher');
person1.printGreeting();

var person2=new Person('mike');
person2.printGreeting();




//prototype

Person.prototype.printGreeting=function(){
  console.log(`i am ${this.name},changed`);
}
person1.printGreeting();
person2.printGreeting();
