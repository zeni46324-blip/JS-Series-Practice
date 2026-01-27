const accountId = 144553
var accountEmail = "umama@gmail.com"
let accountPassword ="12345"
accountCity ="karachi"
let accountState;

/* is trhan data replace/change kr sakty hain k woh variable name likho aur 
jo change krna chahty ho woh likh do = k baad */
// accountEmail = "zeni@gmail.com"
// accountPassword ="6789"
// accountCity ="lahore"

// Is trhan se bhi likh sakty thy aik aik kr k
// console.log (accountId);
// console.log (accountEmail);
// console.log (accountPassword);
// console.log (accountCity);


console.table([ accountId,accountEmail,accountPassword , accountCity,accountState])

/* 
prefer not to use var
because of issue in block scope and functional scope
*/