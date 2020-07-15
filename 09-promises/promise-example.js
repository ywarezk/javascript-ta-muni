// Promise

// 

setTimeout(() => {

}, 1000)


// somebody that shouts
// after 1 second has passed
// hello listeners
// timerPromise : Promise<string>
// promise is in one of the following states: 
// pending ---> resolved
// pending ---> rejected
const timerPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hello listeners');
        // resolve('hello again');

        // reject(new Error('something happened'));
    }, 1000);
});

// timerPromise.then(() => 10);

// timerPromise.then(...);

// timerPromise.then(...);

// timerPromise.then(...);

// listeners
// then returns a promise
// anotherPromise: Promise<number|boolean>
const anotherPromise = timerPromise.then(
    (msg) => {
        console.log(msg);
        return msg.length;
    },

    (err) => {
        console.log(err.message);
        return false;
    }
)

anotherPromise.then(
    (whatWillIGet) => {

    }
)

// promise chaining

// timerPromise
//     .then(
//         () => {
//             return fetch('...');
//         }
//     )
    fetch('sfsdf')
        .catch((err) => {
            // return [];
            throw new Error('case1');
        })
        .then((res) => {
            return res.json();
        })
        .catch((err) => {

        })
        .then((data) => {
            console.log(data)
        })
        .catch(() => {

        })

// Ari QA how to run promises in parallel
Promise.all(
    [
        promise1,
        promise2,
    ]
).then(([promise1Result, promise2Result]) => {

})

/**
 * Generator functions - multiple entry points an exit points
 * 
 * @returns {Promise<number>}
 */
async function grabFromServer() {
    // hello listeners
    try {
        const helloResult = await timerPromise;

        const res = await fetch('...');
        const data = await res.json();
        // return 42;
        return data;
    } catch(err) {
        
    }
    
} 

grabFromServer().then(
    (number42) => console.log(number42) ,
    (err) => {

    }
)

console.log('Aviram');




