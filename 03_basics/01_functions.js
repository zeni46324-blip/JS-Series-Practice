//function
//function matlab jo bhi code likha hy(10 lines)usko aik package main band kr diya hy---ab us package ki jitni bar jahan chahay copies ly ja sakty hain---same kam aghar multiple time krna hy to us k liye aik tareeka hy--usay function kehty hain
// console.log("u")
// console.log("m")
// console.log("a")
// console.log("m")
// console.log("a")  //agahr main umama 5 time likhna to yeh sara code five time likhna pry ga
//how to write function--function keyword-function name-paranthesis-function scope/defination

             //basic function
// function myName() {
// console.log("u")
// console.log("m")
// console.log("a")
// console.log("m")
// console.log("a")
// }           //yeh ban gya hy function

       //function ko jitni bar call/execute krwana hy--is trhan kr sakty

//myName()    //myName reference hy--() laga diye to yeh ho gya function execution

// function addTwoNumbers(number1,number2) {     //isko kehty hain parametrs
// console.log(number1 + number2 )     //yeh console bas value print krwaye ga return nhi
// }                   //function main checking zaroori--woh hum next dekhain gy  
//addTwoNumbers()      //NaN----because number1,number2 main koi value/argument diya hi nhi
// addTwoNumbers(3,4)       // execution time jo values li woh arguments hain
// addTwoNumbers(3,"4")      //34
// addTwoNumbers(3,"a")  //3a----problem--bcz function ki checking nhi ki-datatypes nhi check ki
// addTwoNumbers(3,null)      //3  

// const result = addTwoNumbers(3,4)   //in js function store in variable
// console.log("results:", result)  //result main undefined value kese gai?---function se kya wapis bejha
     
                     //correct way to write function
// function addTwoNumbers(number1,number2) { 
//     let result = number1+number2
//     return result        //return jahan kr diya us k baad koi kam nhi kry ga function

    //return number1+number2 //direct hi return kr diya hy--is tareeky main
// }
// const result = addTwoNumbers(3,5)
// console.log("results:", result)
                        //practice
//  function login(username){
//      return `${username} just logged in`
//  }

//  console.log(login("umama"))  //argument main jab kuch pass nhi krty to undefined ata hy

                //use of if else
// function login(username){
//     if(username == undefined){    //(!username)
//         console.log("please enter an argument")
//         return
//     }
//      return `${username} just logged in`
//  }

//  console.log(login())     //aghar yahan undefined hy

// function login(username = "zeni"){
//      if(username == undefined){    //(!username)
//          console.log("please enter an argument")
//         return
//     }
//           return `${username} just logged in`
//   }
//   console.log(login())     //aghar yahan undefined hy aur parameter main argument dete hain to zaroor mini woh to chalay ga hi


          //          <--------------function------------>         

        //shopping cart---user add kiye hi jata hy items ko abhi ap ko nhi pata k kitny ur items anay walay hain--pata na ho k kitny arguments anay walay hain ap mo us hisab se parameters tyar krny hoty hain

function calculateCartPrice(...num1){
return num1
}
console.log(calculateCartPrice(200,300,100))   //argument/cart value increase ho rhi but paramater aik hi hy to woh bas first hi print krwaye ga ---is prbleam se bachny k liye hum rest operator(...) use krty hain   ----rest operator kehta ap jitna marzi item cart main dalain main array main dalta jaon ga beshak sirf aik hi parameter hy


     //function with object---let see object ko function main pass kese kiya jata hy

// const user = {
//     username: "umama",
//     price: 199
// }

// function handleObject(anyobject){
// console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

// }

// handleObject (user)         //exact object pass



// handleObject ({       //argument main poora ka poora object bhi pass kr sakty hain
//     username: "umama",
//     price :399
//})         //exact object pass



const myArr = [200,100,300]

function returnSecondValue(getarray){
    return getarray[1]
}
console.log(returnSecondValue(myArr));