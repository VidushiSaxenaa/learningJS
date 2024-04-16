//Create a business name generator by combining list of adjectives and shop name and another word
// let a = prompt("Enter Adjective")
// let b = prompt("Enter Shop Name")
// let c = prompt("Enter Another Word")
// let d = alert(a.concat(b,c))



//CODE WITH HARRY SOLUTION
// let rando=Math.random()
// let first, second, third;
// //first name
// if(rando>0.33){
//     first='Crazy'
// }
// else if((rando>=0.33)&&(rando<0.66)){
//     first='Amazing'
// }
// else if((rando>=0.66)&&(rando<=1)){
//     first='Fire'
// }

// //second name
// rando=Math.random()
// if(rando>0.33){
//     second='Engine'
// }
// else if((rando>=0.33)&&(rando<0.66)){
//     second='Foods'
// }
// else if((rando>=0.66)&&(rando<=1)){
//     second='Garments'
// }

// //third name
// rando=Math.random()
// if(rando>0.33){
//     third='Bros'
// }
// else if((rando>=0.33)&&(rando<0.66)){
//     third='Limited'
// }
// else if((rando>=0.66)&&(rando<=1)){
//     third='Hub'
// }

// alert(`${first} ${second} ${third}`)


//OPTIMAL SOLUTION

let obj1={
    1:"Crazy",
    2:"Amazing",
    3:"Fire"

}
let obj2={
    1:"Engine",
    2:"Foods",
    3:"Garments"

}
let obj3={
    1:"Bros",
    2:"Limited",
    3:"Hub"

}

var rando1=Math.floor(Math.random()*3)+1
var rando2=Math.floor(Math.random()*3)+1
var rando3=Math.floor(Math.random()*3)+1

alert(`${obj1[rando1]} ${obj2[rando2]} ${obj3[rando3]}`)