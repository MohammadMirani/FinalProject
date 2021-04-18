let a = "66589";

if (a.match(/\d/g)) {
    console.log(a.length);
    console.log(a.match(/\d/g).length);
    console.log('no');

}



// const fieldPattern = [
//     "firstName",
//     "lastName",
//     "userName",
//     "password",
//     "Email",
//     "mobile"
// ]

// object= {
//     "firstName":"admin",
//     "lastName":"admin",
//     "userName":"admin",
//     "password":"admin",
//     "Email": "admin",
//     "mobile": "admin"
    
// }
// const bodyKey = Object.keys(object)
// console.log(bodyKey);
// const checkFields = fieldPattern.every((field) =>
// bodyKey.includes(field))
// console.log(bodyKey.length);
// console.log( fieldPattern.length);