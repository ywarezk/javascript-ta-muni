

// Error

const somethingHappened = new Error('something happened');
somethingHappened.stack;

class TaMuniError extends Error {
    user = null;
}

// throw


try {
    throw new Error('something happened');
} catch(err) {

}

const a = {};


a.age.toString();

try {
    setTimeout(() => {
        throw new Error()
    }, 1000);
} catch(err) {
    
}


setInterval(() => {

}, 2000)


