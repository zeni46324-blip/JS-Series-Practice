//yeh saray loop basically array specific loop hain

//for of

["","",""]  //jese yeh hota hy wese hi same
[{},{},{}]  //array main bohat saray object ho sakty hain aur har iteration main se object main se kuch value nikalni hy

const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
    
} //string ,object,array ap k iterator hain in py ap loop laga sakty hain...object in syntax bahat broader term main use kiya ja raha hy k kis object py ap loop lagana chahty hain..ab mujay arr py loop lagana hy...ap variable declare krain aur btain k kis py loop lagana hy...is main koi iteration nhi koi incre decrement nhi 


// const greetings = "Hello World"
// for (const greet of greetings) {
//     console.log(`each char is ${greet}`);
// } //for...of loop JavaScript mein array ya string ki values ko ek-ek karke access karne ke liye use hota hai.

                 //Maps...map apny ap main aik object hy....map() array ke har element par 
//function apply karta hai aur ek naya array return karta hai...is main sari unique value milti hain...value 2 dafa nhi milti in answer aghar pa ny code main 2 bar likh bhi diya hy to ....jis order main enter kiya usi order main rehta hy

const map = new Map()
map.set ('IN',"India")
map.set ('FR',"France")    //set kr lete hain value ko

console.log(map);

//kya is py loop laga sakty hain
// for (const key of map) {
//     console.log(key);
// }

                 //is trhan destructure kr sakty hain array k andar
for (const [key,value] of map) {       //uska syntax yeh hy
    console.log(key,':-',value);   
}
//forof loop ...object pr kam nhi krta....object is not iterable here
//forin loop...map py kam nhi krta....map is not iterable here


// 

