        // if statement
// if(condition){

// }  //aghar condition true hy to andar ka code execute krain gy aghar true nhi hy mean false hy to andhar k code /condition k andar nhi jain gy

          //comparison operator
//     <.....>.....<=....>=....==.......!=....===(yeh type bhi check krta hy).....!==(aghar strict cheking krna hy anti pattern main cheking krna hy to)

// const isUserloggedIn = true

// if(isUserloggedIn){
// }

// if (2==2){
//     console.log ("executed")
// }
// if (2=="2"){
//     console.log ("executed")
// }   //==  is mian data type se koi lena dena nhi bas no. eual hy to theak hy ........print executed

// if (2==="2"){
//     console.log ("executed")
// }  //=== main datatype equal nhi to run nhi ho ga kuch bhi 

// if (2!=3){  //yeh question hy iska answer jo bhi ai ga woh true/false ki form main hota hy
//     console.log("executed")
// }

// if (2!==3){
//     console.log("executed")
// }

// const temperature = 41
// if(temperature < 50){
//     console.log("less than 50")
// }
// console.log("temperature is greater than 50");

// const temperature = 51
// if(temperature < 50){
//     console.log("less than 50")
// }
// console.log("temperature is greater than 50");

           //if - else statement 
// const temperature = 51
// if(temperature < 50){
//     console.log("less than 50")
// }
// else{
// console.log("greater than 50");
// }

// const score = 200
// if (score > 100){
//     let power = "fly"
//     console.log(`user power:${power}`);   
// }
// console.log(`user power:${power}`);  //is line py error aye ga due to block scope

       // short hand notation
//const balance = 800

//if(balance >500) console.log("test"); //{}nahi lagye matlab yahan implicit scope hy

      // use nested...jab multiple condition check krni ho

// if(balance<500){
//     console.log("less than 500");
    
// }else if(balance<700){
//     console.log("less than 700");
    
// }else if(balance<900){
//     console.log("less than 900");
    
// }else{
//     console.log("less than 1200"); 
// }
                 //And Operator
// const userLoggedin = true
// const debitCard = true

// if (userLoggedin && debitCard && 2==2){
//     console.log("Allow to buy course");  
// }

// if (userLoggedin && debitCard && 2==3){
//     console.log("Allow to buy course");  
// } //is case main code k andar jatay hi nhi no code run

            // OR Operator
const  loggedInFromGoogle = false
const  loggedInFromEmail = true

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}



















