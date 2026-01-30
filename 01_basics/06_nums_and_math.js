           //js automatically define datatype number
// const score = 400
// console.log(score)
         // explucitily(khud se) define datatype
//const balance = new Number(100)
// console.log(balance)
//         // js numbers properties/methods

// console.log(balance.toString().lenght);        //toString
// console.log(balance.toFixed(2));            //toFixed 100.00 k baad 2 fix value

// const otherNumber = 123.8966        //toPrecision
// console.log (otherNumber.toPrecision(3));//mujay precise value chahie but focus on 3 value
// const anotherNumber = 1123.8966 
// console.log (anotherNumber.toPrecision(3));
 
// const hundreds =1000000
// console.log(hundreds.toLocaleString());   //put comma'

         //+++++++++++++++++ Maths ++++++++++++++ math library by default come with js
// console.log(Math)              // math is object
// console.log(Math.abs(-4));      //abs---absolute value (absolute is - bacome +)
// console.log(Math.abs(4));       // ( in abs + remain +)
// console.log(Math.round(4.3))   //round of 4.3======4
// console.log(Math.round(4.6))  //round of 4.6======5
// console.log(Math.ceil(4.2))   //ceiling value round of
// console.log(Math.floor(4.2))   //floor value round of
// console.log(Math.min(5,8,3,9,2))  // for finding minimum value
// console.log(Math.max(5,8,2,7,2))  //for finding maximum value

     // -------------random----------
     // important jahan hum main Math library ko use krny walay hain woh hy random
console.log(Math.random()); //value always come between 0 & 1
console.log(Math.random()*10 + 1);  //for min value 1   =====*10 shift value to left
console.log(Math.floor(Math.random()*10)+1);   //fix to floor value  1-9

const min = 10
const max = 20
console.log (Math.random()* (max-min+1) +min) //max-min krny se range ajai gi jis main chahie
console.log (Math.floor(Math.random()* (max-min+1)) +min)

                  //--------outputs of above random property
// 0.4411242440781662
// 3.270077718761443
// 1
// 15.09944746294655
// 20

