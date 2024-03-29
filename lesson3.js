console.log("Hello I am conditional tutorial")

let age=17;
let grace =2;
// if((age+grace)>18){
//     console.log("you can drive")
// }

// else{
//     console.log("you can not drive")     
// }


if (age == 18) {
    console.log("You can drive");
}

else if (age == 0) {
    console.log("Are you kidding?")
}

else if (age == 1) {
    console.log("Are you again kidding?")
}

else {
    console.log("You cannot drive");
}


a = 6;
b = 8;
let c = a > b ? (a - b) : (b - a);
// ?--matlab--agar ye toh
// :--matlab--nahi toh 


/*
translates to:
if(a>b){
    let c = a - b;
}
else {
    let c = a - b;
}

*/
