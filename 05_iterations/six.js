//foreach value return nhi krta...value wapis nhi krta

// const coding =["js","rb","cpp"]
//  const values = coding.forEach( (items) => {
//    //console.log(items);
//    return items           //yeh likhny k baad bhi undefined aya hy
// }) 
// console.log(values);   //ese krny se undefined aya hy


// //aghar hum chahty k forEach value return kry to aik to alag se var lo aur us main empty array store kro aur condition main if use kro
// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNum =[]
// myNums.forEach( (num) => {
//  if(num>4){
//     newNum.push(num)
//  }
// })
// console.log(newNum);

//filter main call back function mily ga har value ko each access kiya jai ga lakin usk baad condition deni prti nhy jo jo log us condition k satisfy krain gy woh woh value return ki jai gi baki nhi kijain gi

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// // const newNums = myNums.filter ( (num) => num>4 )  //condition k gird scope laga diya to return keyword likhna hi pry ga
// // console.log(newNums);    //output...[5,6,7,8,9,10]

// const newNums = myNums.filter ( (num) => {
//    return  num>4  
//  } )//condition k gird scope laga diya to return keyword likhna hi pry ga
// console.log(newNums);

//map bhi filter ki trhan hy filter bas wahi value return krta jis ki value true baki ....map sari value return krta hy

// //chaining....matlab k 2,3 method  ap directly use kr sakty ho

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums
// .map( (num)=> num*10)
// .map((num)=> num+1)
// .filter( (num)=> num>=40)

// console.log(newNums);


//reduce...last topic of chai aur code p1

const myNums = [1,2,3]
const myTotal = myNums.reduce( (acc,currval)=> acc+currval,0)
console.log(myTotal);          //use for add to cart
