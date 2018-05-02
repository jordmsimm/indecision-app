/*const square = function(x){
    return x * x;
};
console.log(square(6))

//const squareArrow = (x) =>{
 //   return x*x;
//}

const squareArrow = (x) => x * x;
console.log(squareArrow(9));
*/

const getFirstName = (x) => {
    return x.split(' ')[0]
}
const getFirstNameArrow = (fullName) => fullName.split(' ')[0]

console.log(getFirstName('Jordan Simmons'))