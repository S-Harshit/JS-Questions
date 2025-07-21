// implement promise.any polyfill

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

const p1 = promiseGenerator(4000,);
const p2 = promiseGenerator(2000,);
const p3 = promiseGenerator(3000,);

// Promise.any([p1,p2,p3]).then(res=>console.log(res))
function PolyfillForPromiseAny (Promises) {
     const AggergateError = []
      let rejectionCount = 0;
     return new Promise((res,rej)=>{
         Promises.forEach((promise,index)=>{
             promise.then(result=> res(result))
             .catch(err=>{
                rejectionCount++;
                 AggergateError[index] = err;
                 if(rejectionCount === Promises.length) {
                      rej(AggergateError)
                 }
           
             })
         })
           
     })
     
}



PolyfillForPromiseAny([p1,p2,p3]).then(result=>console.log(result)).catch(err=>console.log("ERROR FROM POLYFILL",err))