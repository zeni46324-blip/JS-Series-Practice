 //there are two ways of object declaration   ------by litertal-----by constructor
// (singleton) ---jab bhi constructor se object declare karin gy to singleton bnany ga ---literal ki trhan declare krty hain to singleton nhi banta hy

//object.create       //is trhan se bhi object banta hy ---isi ko object declare by constructor  kehty hain

                         //symbol ---(unique datatype)
const  mySym = Symbol("key1")     //symbol is trahn se declare krty hai
// //symbol ko as a key use krna hy ?---symbol lo us ko object ki key main add kro--aghar mySym ko symbol ki trhan use krna hy to uska syntax kuch esa hy----[mySym]

         //----object literal
         // yeh object create krny ka tareeka hy---yeh {} hi object hy--(:)--(,)
         //object main keys , value hoty hain---name:key----value:"umama "  ---key ko by default string hi samjhta hy system ---value jo bhi dain string,number,boolean
const jsUser ={                
  name : "umama",
  age : 22,
  email: "umama@google.com"   ,       //object declare
  lastLogin : ["monday","sunday"] ,
  "full name" : "Umama Zainab"  ,  //ab is value ko dot se access krny ka koi tareeka nhi hy bas aik hi  tareeka hy suare notation ka 
  [mySym]: "mykey1"
}         

// console.log(jsUser.age)     //object ACCESS----but yeh itna shi tareeka nhi hy kabhi kabhi
// console.log(jsUser["email"])              //   another way to access object
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])
// console.log(typeof mySym)


jsUser.email = "zeni1234"         // object value change--- bas = k sath value ko overwrite
//Object.freeze(jsUser)        //value koi change na kr apai usk liye --freeze lgana pry ga 


jsUser.greeting = function(){
    console.log("hello js user");
    
}

//console.log(jsUser.greeting)     //functon execute nhi howa basfunction ka reherence aya hy
console.log(jsUser.greeting())  //()lagany se function execute ho ga 

//aghar function main same object ko refer krna hy to (this.) use hota hy

jsUser.greetingtwo= function(){
    console.log(`hello js user,${this.name}`);
}
console.log(jsUser.greetingtwo())