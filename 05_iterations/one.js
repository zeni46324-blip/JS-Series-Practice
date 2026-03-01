// for loop

// for (let i = 0; i <= 12; i++) {
//     const element = i;
//     console.log(element);
    
// }

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     if(element == 5){
//        // console.log("5 no is best");
//     }
//     // console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 0; j <=10; j++) {
//       // console.log(`Inner loop value : ${j} and outer loop ${i}`);   
//       console.log(i + '*' + j + "=" + i*j);
      
//     }
    
// }
// const myArray = ["umama","taqwa","sehar"]
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

//kisi bhi control flow ko break krna ho to hum break likhty hain

// for (let index = 0; index < 10; index++) {
//     if(index==5){
//         console.log(`detected 5`);
//         break //jese hi 5 detect ho gai to seedhy jump kr gye line no 40 k scope k baad
//     }
//     console.log(`value of i is ${index}`);
//     }

// for (let index = 0; index < 10; index++) {
//     if(index==5){
//         console.log(`detected 5`);
//         break //jese hi 5 detect ho gai to seedhy jump kr gye line no 40 k scope k baad
//     }
//     console.log(`value of i is ${index}`);
//     }

for (let index = 0; index < 10; index++) {
    if(index==5){
        console.log(`detected 5`);
        continue // kehta aik bar maaf kr do...aik condition skip ki jati baki phir continue...jese hi detect ho gai condition aik bar skip kr do..us wali ko...break main detect ho gya to yahin k yahin band kro
    }
    console.log(`value of i is ${index}`);
    }
