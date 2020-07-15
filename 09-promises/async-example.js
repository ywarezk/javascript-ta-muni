

setTimeout(() => {

}, 1000)

setInterval(() => {

}, 1000)

// bad pattern 

/**
// callback hell 

somethingAsync1(() => {
    somethingAsync2(() => {
        somethingAsync3(() => {

        })
    })
})

/**
 
async function allAsyncStuff() {
    await somethingAsync1()
    await somethingAsync2()
    await somethingAsync3()
}
  
 
 */
 
 
// classify you async code

// 


// ---0---|------------>
// -------X------------>

// Promise
