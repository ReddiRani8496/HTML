class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  printName() {
    console.log(this.name);
  }
  printAge() {
    console.log(this.age);
  }
}

const student1 = new Student("rahul", 20);
student1.printName();
student1.printAge();
