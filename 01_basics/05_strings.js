               // old way to write code
//  const name ="umama"
//  const repoCount = 50
//  console.log (name + repoCount);
    
               // modern way 
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

               // another way of string declaration
const gameName = new String("umama-zainab")

             //methods/properties

// console.log (gameName[0]);
// console.log (gameName.length);
// console.log (gameName.toUpperCase());
// console.log (gameName.charAt(2));    //for check k kis index py kon sa character hy
// console.log(gameName.indexOf('m'));   // k yeh character kis position py hy 

                    // interesting methods
// const newString = gameName.substring (0,4)    //substring
// console.log(newString)

// const anotherString = gameName.slice (-8,4)    //slice
// console.log(anotherString)

// const newStringOne = "   umama   "
// console.log (newStringOne);
// console.log (newStringOne.trim());      //trim

// const url = "https://umama.com/umama%20zainab"
// console.log(url.replace('%20','-'))       //replace

//  console.log(url.includes('umama') )   //include ----for asking some question --//true
//  console.log(url.includes('taqwa') )     //false

 /* want string convert in array based on dash(-),space ets
 use method splits
 syntax seprator & limit (optional) */

 console.log(gameName.split('-'));       //split   
