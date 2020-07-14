

var hello = 'world';

var stam;

// what is the scope of var

function sayHello(stamBoolean) {
    if (stamBoolean) {
        var foo = 'bar'
    }

    console.log(foo);

    for(let i=0; i<10; i++) {
        var foo = []
    }
}


// the scope is functional





