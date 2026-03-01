const myObject ={
    js :'javascript',
    cpp : 'C++',
    rb : 'Ruby'
}  //object py bhi loop lagana hy forof object k liye kam nhi kr raha tha jesa k hum ny dekha....is k liye yani object k liye hota forin loop

for (const key in myObject) {
   //console.log(key);  //is se keys a jain gi ..but ab object bhi nikalna hy ...uska tareeka hy is key ki jagha myobject ko li jye aur bolain yeh jo key hy is ki value do [key]
 // console.log(myObject[key]); //is se value ajain gi
  console.log(`${key} shortcut is for ${myObject[key]}`); //is trhan donon print krwa diye
  
}
 //forin loop array pr apply krny se array ki keys ain gi ...maghar of loop main woh seedhay hi value utha hy

const programming= ["js","rb","cpp"]
for (const key in programming) {
  //console.log(key);
  //console.log(programming[key]);
  
}   // array ki key kya hoti hy......actually main object ka design hi is liye howa tha array ki key 0 se start ho k by default  no. hoty hain maghar object main jo marzi key dal sakty hain

//array main donon chalty forof..forin bas aik main value ati by defult aik main key