

class Person {
    #address = 'Ramat Gan';

    constructor(name, age) {
        this.name = name;
        this.age = age;

        // this.birthday = this.birthday.bind(this);
    }

    sayHello() {
        console.log(`hi my name is: ${this.name}`);
    }

    birthday() {
        this.age++;
    }

    birthday2 = () => {
        this.age++;
    }
}

// { name, age}      {  sayHello  }            { toString  }
// me ---->        Person.prototype -----> Object.prototype
const me = new Person('Yariv', 35);

// console.log(me.age); // 35
me.birthday();
// console.log(me.age); // 36
const a = {
    birthday: me.birthday
}
a.birthday();
// console.log(me.age); // 36



class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade
    }

    whatMyGrade() {
        console.log(this.grade);
    }

    birthday() {
        super.birthday();
        console.log('student birthday');
    }

    birthday2 = () => {
        super.birthday2();
        console.log('student birthday2');
    }
}

// {name, age, grade, birthday2}
// meAsStudent
const meAsStudent = new Student('Yariv', 35, 60);

meAsStudent.birthday();
console.log(meAsStudent.age); // 36

meAsStudent.birthday2();
console.log(meAsStudent.age); // ? 