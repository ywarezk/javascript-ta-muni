"use strict"

// this in javascript

// instance class in other languages

// this is available in js everywhere

// this represents the context which im on.
// context is whomever is running the current code


// this in javascript is dynamic
function sayHello() {
    // this.yariv = 'stam';
    return this;
}

// console.log(sayHello() === global); // true in the browser it will be window
// use strict will not allow this to be the global context
// this is the case if we are not in strict mode

// console.log(sayHello() === undefined) // this is the case if we are on use strict

// {sayHello: function ....}
const a = {
    // sayHello: sayHello
    sayHello
}
// console.log(a.sayHello() === a); // true

// module.exports / window
console.log(this);
const sayHello2 = () => this;

console.log(sayHello2());

const b = {
    // sayHello: sayHello
    sayHello2
}

console.log(b.sayHello2());



function Person() {
    var that = this;

    that.sayHello = (function() {

    }).bind(this)

    // apply, call


    this.sayHello2 = () => {
        // this will be the instance
    }
}
