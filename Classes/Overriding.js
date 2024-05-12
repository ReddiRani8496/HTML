class Animal {
  eat() {
    console.log("eat");
  }
}

class Dog extends Animal {
  bark() {
    console.log("bark");
  }
  eat() {
    super.eat();
    console.log("dog eat");
  }
}

const dog = new Dog();
dog.eat();
dog.bark();

const animal = new Animal();
animal.eat();
