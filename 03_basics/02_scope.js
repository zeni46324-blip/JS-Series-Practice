//  let a = 10
//  const b = 20
//  var c = 30     //yeh block scope ki trhan kam nhi krta tha
//  console.log(a)
//  console.log(b)
//  console.log(c)


//{} hi scope hy ---function k sath if else k sath jab ata hy--to func ka scope bolty hain
 //let a = 300
// //if k bahar jo bhi  likh rhy woh hy global scope--global scope main jo bhi likhain gy wh value  scope main available hoti hi hy
//  if (true){    //if ki body/bracket k andar jo bhi hy woh hy block scope
//      let a = 10
//      const b = 20    //maghar scope ki value bahir nhi jani chahie
//      console.log(a)     //10
//  }
 //jab bhi {} hon gi wahan scope ka concept aye ga 
 //console.log(a)     //300


 //js main jab bhi {} hon ,if else , function ho,loops hon wahan ka aik alag  scope banta hy--yani woh apny ap main aik alag entity hy---iska global scope se khas relation nhi hota


     //--------nested scope-------
function one() {
    const username = "umama"
    
    
    function two() {
        const website = "youtube"    //child function parent k variable ko bhi access kr patay hain
        console.log(username);
        
    }
    
//console.log(website);   //error---website ko kahan access kr rhy ho --website to andar tha isko comment kr diya then next line two() execute howa

two()  
}
one()


if(true){
    const username = "umama"
if(username === "umama"){
    const website = " youtube"
    console.log(username + website)
}
  //console.log(website);     //comment must bcz it is just for error test
}
//console.log(username);      //comment must bcz it is just for error test



                 //+++++++++++++  interesting concept  ++++++++++++++

        //---hoisting--Hoisting is JavaScript’s default behavior of moving variable and function declarations to the top of their scope before code execution.
                      //technique one to make function
        
    console.log(addone(5));      // function se pehly rakhny se bhi answer ajata hy

    function addone(num) {
    return num+1
}                      //yeh basic function hy
//addone(5)              //remove from here ang take it before scope
                 //technique two to make function
//lakin jab is syntax se bna rhy function to tab error aye ga when execute about func declare
const addtwo = function(num){
    return num+2
}       //yeh bhi aik function hy isko expression bhi bola jata hy..yeh variable ki trhan hy
addtwo()

   //js concept hoisting--fun kese declare hoty hain--kahan rakha jata hy-kya unka execution context hy
             //------hoisting------
   //hoisting yeh hi hota hy ----jahan execution context banta hy---













