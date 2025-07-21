// implemenet promise.race 
function promiseGenerator(time, shouldResolve) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (shouldResolve) {
                res(`Resolved after ${time}`);
            } else {
                rej(`Rejected after ${time}`);
            }
        }, time);
    });
}

const p1 = promiseGenerator(1000,'y');
const p2 = promiseGenerator(2000,);
const p3 = promiseGenerator(3000,);

// Promise.race([p1,p2,p3]).then(res=>console.log(res))
function PolyfillForPromiseAny (Promises) {
     return new Promise((res,rej)=>{
         Promises.forEach((promise,index)=>{
             promise.then(result=> res(result))
             .catch(err=>{
              rej(err);
             })
         })
           
     })
     
}

    


PolyfillForPromiseAny([p1,p2,p3]).then(result=>console.log(result)).catch(err=>console.log("ERROR FROM POLYFILL",err))