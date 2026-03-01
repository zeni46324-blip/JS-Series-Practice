//intersting loop jo bohat kam aty hain
   // actually kuch loop arrays main direct hi property main add kr diye jatay hain
                    //for each loop    ...map ......yeh loop k parameter hain jo by default inject kr rakhay hain
                //for each loop higher order funtion hy
                //[{},{},{}]...yeh common scenario forEach main boohat use kiya jata hy
const coding =["js","rb","cpp"]
       //yeh kehta hy k mujay aik function dy do k ab callback funtion main function ka nam nhi dete hainmujay kya krna hy...parameter main koi nam dy do jo suitable hy 
// coding.forEach(  function (item) {
// console.log(item);
// } )

// // coding.forEach(  (item) => {
// //     console.log(item)
// // })
//       //one more way
// function printMe (item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

 coding.forEach(  (item,index,arr) => {
    console.log(item,index,arr);
    
 } )//ForEach k pass bas aik hi parameter ka access nhi hota mean sirf item ka nhi item,index,arr(array list)



 //is pr iteration seekhna bohat important hy database se jo value ati hy woh array k format main ati hy aur har aik value aik object hi hota hy

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
    {
        languageName : "C++",
        languageFileName : "cpp"
    }
]





 //yahan hum ny array main jo object hain unka access kitni asani se ly liya hy