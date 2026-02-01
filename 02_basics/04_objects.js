  /*object by constructor
object declare with the help of constructor*/

//const tinderUser = new Object()
//const tinderUser = {}

// tinderUser.id = "123abc"  
// tinderUser.name = "umama"
// tinderUser.isLoggedIn = false
 /*is trhan jo value is ko di hain woh is k andar a gai hain
 output:{ id: '123abc', name: 'umama' }*/

//console.log(tinderUser)

      //object k andar object declare kr k dekhty hain

// const regularUser = {
//     email:"zeni1234" ,
//     fullname:{         //fullname apny ap main aik object hy
//           userfullname: {
//             firstname :"umama",
//             lastname : "zainab"
//           }
//     }
// }          //object k andar object ko is trhan se access kr sakty ahin

//console.log(regularUser.fullname)   // output:{ userfullname: { firstname: 'umama', lastname: 'zaianab' } } 

// console.log(regularUser.fullname.userfullname.lastname) // nesting open krni hy to (.) laga k access krty jaye

/* object main--- optional chaining---namm ki bhi cheeze ati hy k aghar name element exit nhi krta to ??
aghar exit nhi krta to kya problem hy----kabhi kabhar jab api se response ata hy to yeh syntax use 
krna prta hy name?  (?) laga dete is trhan if else se bach jatay hain*/  

                //object merge/combine

// const obj1 = { 1: "a" , 2 : "b"}
// const obj2 = { 3: "a" , 4 : "b"}

//const obj3 = {obj1,obj2}           // is trahn problem aye gi ---object k andar object a jai ga --{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
            //target main source ko add kr deta hy assign method---(target,source)                
//const obj3 = Object.assign(obj1,obj2)      // is trahn combine kr sakty hain---{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//const obj3 = Object.assign({},obj1,obj2) //optional parameter---behave as target---and other behave as sourse

// const obj3 = {...obj1,...obj2}             //spread
//console.log(obj3)

         // jab bhi database se value ai gi ------to array of objects aye ga 
// const users  = [
//     {
//         id: 1 ,
//     email: "zeni"
//     } ,
//  {
//         id: 2 ,
//     email: "zuni"
//     } ,
//  {
//         id: 1 ,
//     email: "zaanu"
//     }

// ]
// //console.log(users)
// //console.log(users[1].email)

// console.log(Object.keys(tinderUser));       //object ki sari keys chahie---output value datatype --array --sarii keys ko liya aik array main rakh diya ---ab chahy to loop laga SAKTY HAIN
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));   //entities har aik key:value ko array bna deta hy---output:[ [ 'id', '123abc' ], [ 'name', 'umama' ], [ 'isLoggedIn', false ] ]
// console.log(tinderUser.hasOwnProperty('email')); // Ask k kya ap k pass yeh value hy


            //Destructuring objects
//  const course ={
//     coursename:"js in detail",
//     price :"2000",
//     courseInstructor : "umama"
// }

 //course.coursename      //is tareeke se access kr sakty 
//   const {coursename} = course     // k baad woh likhain gy jahan se value extract krni hy --{} main woh lihain gy jo value extract krni hy -----maghar code ko clean bannay k lie bhi aik syntax hy --ab bar bar pura course.course name likhny ki bjai sirf jis ko extract krna woh likh sakty hain
//   console.log(coursename)        

//ab aghr ap ko lag raha k object name bohat lamba hy to ap destruct bhi kr sakty hain is trahan se
        //object destructure--object se values nikaal kar direct variables bana lena
// const {coursename:cn} = course    //curly braces wala syntax yani destructuring ki ja rhi hy
// console.log(cn)

        //API's--jab apna kam kisi aur k sir py daal dena hy usi ko API's kehty hain --ap k apass kuch values ati hain backend se un values ko kese likhty hain---before(xml)--now(JSON) main value ati hain

    //how look json---{}--yeh humara json hy---object hi hy--is object ka bas koi naam nhi hy
          
            //is trhan API main value milti hy---API objects main milti hy
// {
//  "name" = "umama",
//  "semester" ="seventh"    //bas is main keys ko  string ki trhan likhty hain
// }

         //API array ki form main bhi milti hy---JSON format(javasript object notation)
[
    {},
    {},
    {}
]

      //get famous API from----random user me API---response jo aya us ko samjhny k liye tool hain----JSON formator