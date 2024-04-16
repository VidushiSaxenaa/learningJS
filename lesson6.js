//console.log("FAULTY CALCULATOR")

// function FAULTY(name,a=Math.random(),b=Math.random()) {
//     if(name=="sum"){
//         console.log(a+b)
//     }

//     else if(name=="subtract"){
//         console.log(a-b)
//     }

//     else if(name=="multiply"){
//         console.log(a*b)
//     }

//     else if(name=="divide"){
//         console.log(a/b)
//     }    
    
// }

//let answer=FAULTY("sum")
//console.log("the answer is",answer)


///Another way of doing this
let rando = Math.random()
let a = prompt("Enter First Number")
let b = prompt("Enter Second Number")
let c = prompt("Enter Operation")

let obj =  {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}


if(rando>0.1){
    //normal calc
    alert(`The result is ${eval (`${a} ${c} ${b}`)}`)  //eval fxn calculate karke deta hai
    //eval chal nahi raha
    // back tick se chalega "`" tab ke upar esc ke neeche
}

else{
    //wrong calc
    c = obj[c]
}
