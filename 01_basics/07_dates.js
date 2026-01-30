//date

// let myDate = new Date()
// console.log(myDate);     // output---(2026-01-30T12:54:59.770Z)---not readable,not not

//see k kis trhan conversion main le k atay hain -----------for use
       //--------methods ----har method date ko kisi format main convert krta hy
// console.log(myDate.toString())
//Fri Jan 30 2026 13:01:24 GMT+0000(Coordinated Universal Time)
// console.log(myDate.toDateString())     //Fri Jan 30 2026
// console.log(myDate.toISOString())  //2026-01-30T13:01:24.426Z
// console.log(myDate.toJSON())      //2026-01-30T13:01:24.426Z
// console.log(myDate.toLocaleDateString())   //1/30/2026
// console.log(myDate.toLocaleString())    //1/30/2026, 1:01:24 PM
// console.log(typeof myDate);        // ----object

    //new date declare+++++specific date declare   ----------month start from 0 in js
// let myCreatedDate =new Date(2026,0,30) ;          
// console.log(myCreatedDate.toDateString());

// let myCreatedDate =new Date(2026,0,30,5,3) ;      
// let myCreatedDate =new Date("2026,01,30") ;   //yy,mm,dd
// let myCreatedDate =new Date("01-30-2026") ;   //mm,dd,yy 
// console.log(myCreatedDate.toLocaleString());

  // date mmain TimeStamp bhi hoty hain  ----for design quiz,polls
// let  myTimeStamp = Date.now()          
// console.log(myTimeStamp)     //---output(1769780365591)  ----mili sec value hy yeh

       //ab hum is mili sec se koi bhi value nikalna sekhain gy
       // hotel app bna rhy hain ---rooms book krain gy--to dates ko compare krna prta hy  

// console.log(myCreatedDate.getTime()) //---output (17697312000000)--mili sec value hy yeh  

         //convert in sec
// console.log(Date.now()/1000);   //problem decimal value bhi jati hy 
// console.log(Math.floor(Date.now()/1000));    //solution

    //specific information extracct krni hy month janana hy year jananhy to use these methods
let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

//write in string interpolation way
//`${newDate.getDay()} and the time is ${} `

//customize format toLocaleString-------ctrl+space

console.log(newDate.toLocaleString('default',{
weekday: "long"         //here define many properties
    }))