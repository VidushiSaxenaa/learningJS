/*write  a js program to find the factorials */
//this is my method
// let n= 6
// for(let i=1;i<=n;i++){
//     n=n*(n-1)
// }
// console.log(n);

//code with harry method

let a = 6
function factorials(number){
    let arr = Array.from(Array(number+1).keys())
    console.log(arr.slice(1,))
    let c = arr.slice(1,).reduce((a,b)=>{   //reduce method
        return a*b
    })

    console.log(c)
}

factorials(a)
