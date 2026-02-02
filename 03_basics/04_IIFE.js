//Immediately invoked function expression (IIFE)
//jese hi function likha isko foran se execute krwana hy
//why---kai baar aik file hoti jis se database concection hy---hum chahty k jese hi application start ho humara us file k andar database ka connection start ho jaye...kai baar bhum nhi chahty k function k andar global problem krain...global scope se polute/polution nhi chahie humraa alag scope bna lete hain ..ab is ko hum chahty k yeh immeditely execute ho jai wohin py us k liye is ko use krty hain

// function chai(){
//     console.log("DB connected")     //yeh to immediately ho gya but uska kya ..jab global scope se chhezain polute hoti hain us k liye iife likh dete hain
// }
// chai()

      //IIFE..yeh inveko to ho gya lakin isy pata nhi k rokna kahan py hy..js main us ko end krny k liye semi colon ki zarorat hy
(function chai(){      //named IIFE
    console.log("hello ")  //humain immeditely invoke krna hy is function ko--to direct execute wali line nhi likhain gy..chai()... ()  yeh likhain gy...but aik choti si abhi problem hy
})
() ;    //yeh IIFE hy ....global scope k polution ko hatany k liye IIFE ka use kiya //execution call//semi colon must
//arrow function we see..k paranthesis laga do block ban jata hy usky uper bji kam kiya jata hy...ab kya kro k jo funtion ki puri defintion likhi hy us py paranthesis laga do..ab problem solve  
              
(()=>{             //unnamed IIFE
    console.log("hello girls")
})();

((name)=>{                //how to pass parameter in IIFE
    console.log(`hello  ${name}`)
})('umama');




