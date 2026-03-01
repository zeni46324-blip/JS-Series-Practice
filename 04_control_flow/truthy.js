// const userEmail = "u@umama.com"
// //hum ny ==(comparison) nhi kiya...na hi = true rakha kisi ko...man liya k string true value hy ...to yeh hi truthy value hy

// if(userEmail){
// console.log("Got user Email");
// }else{
//     console.log("Dont have user email");
// }

//const userEmail = "" //empty string man liya k false value hy
//hum ny ==(comparison) nhi kiya...na hi = false rakha kisi ko...man liya k  empty string mean false value hy ...to yeh hi falsy  value hy

// if(userEmail){
// console.log("Got user Email");
// }else{
//     console.log("Dont have user email");
// }


       //falsy values
// false ....   0  ...   -0  ....  0n ...  ""  ... null ... undefined ... NaN

      //truthy values
// "0"  ... 'false' ... "(string main space/kuvh written)" ... [(empty object)] ... {} ...function(){}

// const userEmail = []

// if(userEmail.length === 0){
 //    console.log("Array is empty");
 //}

//  const emptyObj = {}

//  if(Object.keys(emptyObj).length === 0){
//      console.log("Object is empty");
//  }
//GK.....false ==0 (true),false == '' (true),0=='' (true)


//Nullish Coalescing operator (??) : null undefined
//yeh krta kya hy k...aghar null value ai hy to uska safety check kr dy
let val1;
val1 = 5?? 10
//val1 = null??10
console.log(val1);

//Nullish Coalescing operator (??)....terniary operator  (?) yeh alag alaag cheez hy

//terniary operator  (?)
//condition ? true : false

const iceTeaprice = 100
iceTeaprice >= 80 ? console.log("less than 80") : console.log("greater than 80");

