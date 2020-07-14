// prototype in js

// inheritance mechanism 

const hello = 'world';

// hello.toString();
// hello.substr();s
      //   __proto__
// hello ------------> {prototype1} --> {prototype2} ---> {prototype3} ... 
                       // toString        //toString
// {
//     substr: function() {...}
// }

// {
//     toString: function() { ...}
// }

function Person(name) {
    this.name = name;

    this.sayHello = function() {
        console.log('wat!');
    }
}

Person.prototype.sayHello = function() {
    console.log(`hello ${this.name}`);
}

Person.prototype.name = 'default';

const me = new Person('yariv');
// me ------------> {Person.prototype} --> {Object.prototype}

// me.sayHello();
// const you = new Person('Gabi');
// you.sayHello(); // wat

// Object.getPrototypeOf(me)
// Person.prototype.sayHello()
me.__proto__.sayHello.call(me);
Person.prototype.sayHello.call(me);