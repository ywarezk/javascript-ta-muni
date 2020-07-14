

const sayHello2 = function(name = 'Yariv', age) {
    // name = 'another value';

    console.log(`Hi my name is: ${name} and my age is: ${age}`);
}


function sayHello(someArray = []) {
    console.log(`Hello`);
    someArray.push(4);
}

// sayHello('Yariv');
const stamNumbers = [1,2,3];
sayHello(stamNumbers);
console.log(stamNumbers); // [1,2,3,4]

const demoString = 'hello';
sayHello2(demoString);
console.log(demoString); // hello

// #f sayHello

sayHello2(undefined, 35);
sayHello();

// arrow functions / lambda function/ fat arrow functions

const helloYariv = (name = 'Yariv', age) => {
    // ...
    console.log(`Hi my name is: ${name} and my age is: ${age}`);
}


// if we have a single argument you can drop the arguments ()
const helloYariv2 = name => {
    // ...
    console.log(`Hi my name is: ${name} and my age is: ${age}`);
}


// if you have single return you can drop {}
const helloYariv3 = age => age * 2;

helloYariv3(35);