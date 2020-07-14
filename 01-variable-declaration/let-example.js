

let hello = 'world';
let foo;

hello = 42;

// let scope: {}

function sayHello(stamBoolean) {
    if (stamBoolean) {
        let foo = 'bar'
    }

    console.log(foo);
}


