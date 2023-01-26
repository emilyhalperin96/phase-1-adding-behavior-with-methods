//each class accepts the parameters name and sex
//stores those values as properties

//create the method speak for each class 
// cat, speak returns "name says meow"

class Cat {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    speak() {
        return `${this.name} says meow!`;
    }
}

class Dog {

 constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

      speak() {
        return `${this.name} says woof!`;
    }
}

class Bird {
  constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    speak() {
        if (this.sex == 'male') {
            return `It's me! ${this.name}, the parrot!`
        } else {
            return `${this.name} says squawk!`
        }
    }
    }