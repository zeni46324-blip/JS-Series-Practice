/* Array-------array written in  [] square brackets and 1,2,3----these are elements(string,number,booleans,objects,mix datatypes)elements to be different---- Array[0,1,2,true,"umama"] 
Array is---object datatype in which multiple collection of items place in a single variable
single variable declare kiya myArr ab us main saray elements rakh sakty hain*/

/*array properties
---js array resizeable
---element access by index
---zero-based indexing*/


  const myArr =[1,2,3,4,5]
// const myFamily =["isha","aqsa","taqwa"]
// console.log(myArr[1]);
// console.log(myFamily[2]);

              //----array declare by keyword
// const myArr2 = new Array(0,1,2,3)
// console.log(myArr2[1]);

              //Array methods
// myArr.push(9)    //push simply value ko add kr deta hy array main
// myArr.pop()      //pop last value of array ko remove kr deta hy
// myArr.unshift(8)    //8 insert at the start of array...start main insert krny k liye use hota
// myArr.shift()    //array k start se element remove krny k liye use hota hy
// console.log(myArr);
// console.log(myArr.includes(4)) // answer in boolean 
// console.log(myArr.indexOf(4))

              //----interesting method---used many time
// const newArr = myArr.join()        //join adds all the elements of array into a string
// console.log(myArr);      // output---- [ 1, 2, 3, 4, 5 ]
// console.log(newArr);     //  output----1,2,3,4,5 ----values converted in string
// console.log(typeof newArr);    //string
// console.log(typeof myArr);     //object

            // methods slice,splice
// console.log("A",myArr);   //mark A where original array
// const myn1 = myArr.slice(1,3)   // slice main last range include nhi hoti---not good answer
// console.log(myn1)
// console.log("B",myArr);     //mark B where slice use

// const myn2 = myArr.splice(1,3)   //splice main last range inclue hoti hy---not good answer
// console.log("C",myArr);      //mark C where splice use---yahan output main array hi change splice operation ny original array ko manipulate kiya hy jojo splice ki range main araah tha woh splice ko de diya aur baki jo bacha woh array ko dy diya
// console.log(myn2)



  