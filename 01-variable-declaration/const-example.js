

const hello = 'world';

const myArray = [];

// assignment is a must

// the variables can be mutable
myArray.push(1);
myArray.push('hello');

myArray = 'hello' // error

hello[2] = 't'; // C

// what is the scope of const?
// {}

function sayHello(stamBoolean) {
    if (stamBoolean) {
        const foo = 'bar'
    }

    console.log(foo);
}