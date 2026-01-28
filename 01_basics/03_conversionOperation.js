                   //practice 1
// let score = 33
// console.log (typeof score);
//  console.log (typeof (score));


                   /*practice 2 ----is main hum ny 33 ko string bna k dekha k
                    type kya show krwata hy */
//  let score ="33"
//  console.log (typeof score);
//  console.log (typeof (score));

          /* practice 3 -------ab is main dekhain gy jo 33 ko as a string liya tha
                ab conversion k baat type number show krwata hy yan string hi */
//let valueInNumber = Number(score)
//console.log(typeof (valueInNumber));

               // practice 4 -------show NaN mean not a number
// let score ="33abc"
// let valueInNumber = Number(score)
// console.log (typeof valueInNumber)
// console.log(valueInNumber)



//let score = null
// let score = undefined
// let score = true

            //information
//"33" => 33
//"33abc" => NaN
//true => 1
// false => 0
// "" => false
// "umama" => true

          //practice --- hum chahty hain true likha aye but variable value 1 hy
//  let isLoggedIn =1  
//  let booleanisLoggedIn = Boolean(isLoggedIn) 
//  console.log (booleanisLoggedIn)


                  


                    //  ------operations------
            //     let value =3;
            //     let negativeValue = -value;
            //     console.log (negativeValue);

      // console.log(2+2);
      // console.log(2-2);
      // console.log(2*2);
      // console.log(2/2);
      // console.log(2**2);
      // console.log(2%2);

            //------combine string

      // let str1 = "hello"
      // let str2 = " umama"
      // let str3 =str1+ str2 ;
      // console.log (str3);


      // console.log("1" + 2);   //output 12
      // console.log ( 1 + "2");  // output 12
      // console.log("1" + 2+ 2); // output 122
      // console.log(1 + 2+ "2");  // output 32

                //------- tricky conversion but not recommended
       
      // console.log(+true);  //otput 1
      // console.log(+"");    // output 0

      // let num1,num2,num3
      // num1=num2=num3=2+2
      // console.table([num1,num2,num3])
         
            //------tricky question
      // let gameCounter = 100
      // gameCounter ++;
      // console.log (gameCounter)
       
      // let gameCounter = 100
      // ++ gameCounter;
      // console.log (gameCounter)


           //*************type conversion example
           /* Implicit Type Conversion (Automatic) 
           JavaScript automatically changes the type when needed */

                    //String + Number → String
// let result = "5" + 2;
// console.log(result);     // "52"
// console.log(typeof result); // string

                  //String - Number → Number
// let result = "10" - 2;
// console.log(result);     // 8
// console.log(typeof result); // number

               //Boolean to Number
// let a = true + 1;
// console.log(a); // 2

                   /*Explicit Type Conversion (Manual)
                     Here we convert the type ourselves using functions */

                  //String → Number -----Using Number()
// let value = "33";
// let num = Number(value);

// console.log(num);        // 33
// console.log(typeof num); // number       

                 //Using parseInt() (whole number)
// let value = "25";
// let num = parseInt(value);
// console.log(num); // 25

                 //Using parseFloat() (decimal number)
// let value = "3.14";
// let num = parseFloat(value);
// console.log(num); // 3.14

                  //Invalid String → Number
// let value = "33abc";
// let num = Number(value);
// console.log(num); // NaN

                   //Number → String

// let num = 100;
// let str = String(num);
// console.log(str);        // "100"
// console.log(typeof str); // string

            //Boolean → Number----Number(true); ---1 ,Number(false);----0 
// let a = Number(true);
// console.log(a); // 1

            //Number → Boolean ----Boolean(1);----true ,Boolean(0);-----false
// let b = Boolean(0);
// console.log(b); // false

            //String → Boolean
// Boolean("hello"); // true
// Boolean("");      // false
