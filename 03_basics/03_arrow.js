//this keyword---current context k baray main btata hy/current context ko refer krta hy
//object 
 
// const user ={
//     username : "umama",
//     price : 999,
//     welcomeMessage : function() {
//         console.log(`${this.username}, welcome to website`);
//         console.log(this)  //this current value /variable hain unki baat krta hy
//  }   //current context ko refer krny k liye this use hota hy

// }
// user.welcomeMessage()   //yahan tak current context same tha
// user.username = "zeni"  //yahan value change kr di ---context cahnge kr diya 
// user.welcomeMessage()

// console.log(this);  //jab hum node environment/block space main this refer to empty object because global context hi nhi hy is liye empty
     
                // only this in function in global scope--khali this main kuch to rakha hy
// function chai(){
//     console.log(this);   //jab node environment/global scope main --function k andar this ko operate krty hain to bahta sari values ati hain---result check kr k dekho bhai
// }
// chai()

   //yeh humara current context wala concept object k andar hi kam kr raha hy function main this ko is trhan se use nhi kr pa rhy---undefined ata hy

// function chai() {
//     let username = "umama"
//     console.log(this.username);  //function main (this.) ese use nhi kr patay---undefined ata hy ese this ko object main hi use kr patay hain
    
// }
// chai()


  //how to declare function with the help of arrow function
  //arrow function syntax ---remove functionm keyword--aur parameter kl baad arrow laga dijye

//   const chai = ()=> {
//     let username ="umama"
//     console.log(this.username);     //undefined
    
//   }
// chai()

// const chai = ()=> {
//     console.log(this);     //empty--{}----arrow function main this use nhi hota
//   }
// chai()


                         /*Arrow function ka apna this nahi hot
                         Ye this global scope (window) se uthata ha
                         Global me name filhal nahi hota/hy is liye → undefined*/

 //Arrow function is liye use hota hai kyun ke ye code ko short, clean aur predictable bana deta hai        
      //normal function
//   function add(a, b) {
//   return a + b;
//    }   add()
       //arrow function
    //    const add = (a, b) => a + b;
    //    add()

           //--------basic arrow syntax-------
//      ()=>{}
    //ab is ko variable main bhi hold kr sakty hain

// const addTwo =(num1,num2) => {
//     return num1+num2            //explicit return---jab ap return keyword use krty hain
// }
// console.log(addTwo(3,4));

        //isko aik trhan se aur use kiya jatra hy jis ko bolty hain---implicit return---main curly braces use nhi krny hotry hain

//const addTwo = (num1,num2)=> num1+num2
//another way to write
//const addTwo = (num1,num2)=> (num1+num2) //curly braces ,main wrap kiya to return keyword likhna pry ga ---aghar paranthesis main wrap kiya to nhi
//console.log(addTwo(3,4));


// object return

// const addTwo = (num1,num2)=> {username: "umama"} //undefined---isko paranthesis main wrap krna pry ga
// console.log(addTwo(3,4));


const addTwo = ()=> ({username: "umama"} )//undefined nhi aye ga ab --- paranthesis main wrap kr diya
console.log(addTwo());

