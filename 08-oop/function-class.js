

function Person(name, age) {
    // this will be the instance the actual object
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function() {
    console.log(`hi my name is: ${this.name}`);
}

// { name, age}      {  sayHello  }            { toString  }
// me ---->        Person.prototype -----> Object.prototype
const me = new Person('Yariv', 35);

function Student(name, age, grade) {
    const address = 'Ramat Gan'
    // this.name = name
    // this.age = age
    Person.call(this, name, age);
    this.grade = grade;

    this.whatsMyAddress = () => {
        console.log(address);
    }
}

// {}      ------> {sayHello}
Student.prototype = Object.create(Person.prototype);
Student.prototype.whatMyGrade = function() {
    console.log(this.grade);
}


// { name, age} -----> { whatMyGrade  } ------> { sayHello } ------> Object.prototype
const meAsStudent = new Student('Yariv', 35, 60);