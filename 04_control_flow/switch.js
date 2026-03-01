         // switch syntax
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// } //aik key hoti hy aur us ki multiple value check krty hain

// const month = 3
// switch (month) {
//     case 1:   //value 1 k brabar hy yan nhi
//         console.log("january");
//         break;
//     case 2:   //value 2 k brabar hy yan nhi
//         console.log("feburary");
//         break;
//     case 3:   //value 3 k brabar hy yan nhi
//         console.log("march");
//         break;
//     case 4:   //value 4 k brabar hy yan nhi
//         console.log("april");
//         break;

//     default:
//  console.log("default"); //aghar kuch match nhi howa to default
//         break;
// }
//aghar pehla case match nhi howa to dusra match kr k dekho
//normally kya hota hy k jahan bhi key match ho gya us k baad ka sara code execute ho jata hy except default... maghr break se wahin stop ho jata hy

const month = "feb"
switch (month) {
    case "jan":   //value 1 k brabar hy yan nhi
        console.log("january");
        break;
    case "feb":   //value 2 k brabar hy yan nhi
        console.log("feburary");
        break;
    case march:   //value 3 k brabar hy yan nhi
        console.log("march");
        break;
    case april:   //value 4 k brabar hy yan nhi
        console.log("april");
        break;

    default:
 console.log("default"); //aghar kuch match nhi howa to default
        break;
}