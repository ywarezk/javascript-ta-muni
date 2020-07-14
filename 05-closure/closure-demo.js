// Closure

// where will js look for variables value

// function stam() {
//     const name = 'Yariv';

//     const sayHello = function() {
//         // const name = 'Alex';
//         console.log(name);        
//     }
// }

// let counter = 10;

// setTimeout(() => {
//     console.log(counter); // 10
//     counter+=10;
// }, 1000);

// setTimeout(() => {
//     console.log(counter); // 20
// }, 2000);

// factory in express
function helloMiddleware(name = 'Yariv') {
    return (req, res) => {
        res.send(`hi ${name}`);
    }
}

helloMiddleware('Alex')();
helloMiddleware('Shai')();
