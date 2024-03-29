console.log("loops tutorial")
let a = 1
for (let i = 0; i < 100; i++) {
    console.log(a+i);
}

let o = {
    Name: "Vidushi",
    Role: "Programmer",
    Company: "Adobe"
}


//forinloop
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }
for (const key in o){
        
    const element = o[key];
    console.log(key, element)
}

//forofloop
// for (const iterator of object) { 
    //sone rando code 
// }
for (const c of "vidushi") {
    console.log(c);
    
}

// let v = 5;
// while (v<6) {
//     console.log(v);
//     v++;
// }

let v=10
do {
    console.log(v);
    v++;
} while (v<6);