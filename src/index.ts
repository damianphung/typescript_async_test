import delay from "delay";
// const d = import {  } from "module";
const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed ${Date.now() - tick} ms`);


const getFruit = async (name: string) => {
    const fruits = {
        "pineapple" : 'p1',
        "peach":      'p2',
        "strawberry": 's1'
    }

    await delay(1000);
    return (fruits[name]);
}


function z()
{
    const y = new Promise( (resolve, reject) => {
        if (true) {
            // this is run on main thread
            log("before promise resolving");
            
            resolve("good");
        }
        else {
            reject("bad");
        }
    });
    return y;
}

const x = z();

console.log(x);


// x.then( () => {
//     delay(1000);
//     log("promise resolved");
// });

// console.log("this should run before promise resolved");

const makeSmoothieSequential = async function() {

    // sequential
    
    const a = await getFruit("peach");
    const b = await getFruit("strawberry");

    console.log("makeSmoothieSequential");
    return [a,b];
}


const makeSmoothieConcurrently = async() => {

    
    const a = getFruit("pineapple");
    const b = getFruit("strawberry");

    console.log("makeSmoothieConcurrently");
    const smoothie = await Promise.all([a,b]);
    return smoothie;
}



// console.log("does this come after?? 1");
// // makeSmoothieSequential().then(log)
// var p = new Promise( resolve =>  {
//   console.log("promise executed on main thread"); // run on main thread
// });

// console.log("does this come after?? 2");
// makeSmoothieConcurrently().then(log)


// var p1 = new Promise(function(resolved,rejected){
//     log("new promise constructor");
//     return rejected(new Error("OH NO"));
// });

// var p1 = Promise.reject("xxx");
// var p2 = p1.then( resolved => { log("--resolved " + resolved);}, rejected => {
//     log("--rejected " + rejected );
// })




// so now await can either be a resolved or rejected promise. 
// Promise.reject // Promise.resolve

function resolveLater(resolve, reject) {
    setTimeout(function() {
      resolve(10);
    }, 1000);
}

function rejectLater(resolve, reject) {
  setTimeout(function() {
    reject(new Error('Error'));
  }, 1000);
}



var myPromise = function(boolean){

    var promise = new Promise( (resolve, reject) => {
        if(boolean) {
            console.log("True");
            resolve("True")
        }
        else
        {
            console.log("False");
            reject(new Error("False"));
        }
    });
    return promise;
}



var test = async function() {
    // log("before delay")
    // await delay(1000);
    // log("after delay")

    // console.log("awaiting promise");
    // var ret = await myPromise(true);
    // log(ret)

    var x =  Promise.all( [ myPromise(true),delay(1000) ] );
    log(x)
    // non blocking
    // var ret = myPromise(true).then( function(){
    //     log("then prpmise");
    // } );

    log("hi");
    // var p1 = Promise.resolve('foo');
    // var p2 = p1.then(function() { // called when resolved
    //   // Return promise here, that will be resolved to 10 after 1 second
    //   return new Promise(resolveLater);
    // });
    
    // // when p2 is resolved  or rejected
    // p2.then(v => {
    //   log('resolved', v);  // "resolved", 10
    // }, function(e) {
    //   // not called
    //   error('rejected', e);
    // });
    
    // var p3 = p1.then(function() {
    //   // Return promise here, that will be rejected with 'Error' after 1 second
    //   return new Promise(rejectLater);
    // });
    // p3.then(function(v) {
    //   // not called
    //   log('resolved', v);
    // }, function(e) {
    //   error('rejected', e); // "rejected", 'Error'
    // });
    
}
test();
log("this comes before");


