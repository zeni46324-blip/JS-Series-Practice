const myArr1 = [0,1,2]
const myArr2 = [4,5,6]

          //push---existing array main push krta hy

//myArr1.push(myArr2)      //poeple assume k donn array k elements ko merge j kr dy ga 
//console.log(myArr1) //but array k andar array agai  in output [ 0, 1, 2, [ 4, 5, 6 ] ] 

/*0--1st element,1--2nd elemen,2--3rd element, but yeh complete[ 4, 5, 6 ]--4rth element hy
4rth element apny ap main aik array hy is wali array se koi value access krni hy to ese krain gy */

// console.log(myArr1[3][1])     // not a very good way /syntax to access value

            //aik aur method-- abhi hum ny push use kiya ap concat bhi use kr sakty hain
    //concat--donon array ko merge kr diya---aur return kiya naya array[ 0, 1, 2, 4, 5, 6 ]
// const  allArr = myArr1.concat(myArr2)
// console.log(allArr);

      //one more easy method like concat---is Spread ---but it also used when we combine more than 2 things

// const allnewArr = [...myArr1,...myArr2]
// console.log(allnewArr);

                //this use rarely
// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array = another_array.flat(Infinity)  //flat mean--array k andar array wala syntax khatam kr k single array de dyga
//console.log(real_another_array)

                          /*it is very useful when data scraping
jab bhi data select krty hain web page se to kai baar alag format main ata hy nodelist main,objects main ,string main,but chahie to array ---to array pr hi loop kr sakty hain*/

console.log(Array.isArray("umama"))     //ask this is array----output ----false
console.log(Array.from("umama") )                      //convert ese krain gy---[ 'u', 'm', 'a', 'm', 'a' ]
                                //interesting
console.log(Array.from({name:"umama"}) )    // output ---[] arrayempty beacuse yeh convert nhi kr pa raha 

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))       // from ki jagha of bhi use kr saktain hain-- output:[ 100, 200, 300 ]
