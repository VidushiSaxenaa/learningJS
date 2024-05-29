console.log("arrays tutorial")
let arr=[1,2,3,4,5]

arr[0]=25;
console.log(arr, typeof arr);
console.log(arr.length);

// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr[4]);
console.log(arr.toString());//converts array into string
//OUTPUT::25,2,3,4,5
console.log(arr.join(" and "));// will join with the converted array
//Jahan comma the wahan " and " aa jayega
//OUTPUT::25 and 2 and 3 and 4 and 5
arr.pop()//last element ko pop out karke array alter karke arr print karta hai
arr.push(11)//last me element add karta hai length badha ke aur alter karke orignal ko prinnt kara deta hai
//arr.push("Vidushi") is also valid
arr.shift()//pehle wale ko nikal deta hai just like pop
arr.unshift("Me")//just like push ye stating me element add kar deta hai length increase karke


