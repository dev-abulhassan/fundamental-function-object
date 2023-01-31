// function bringShingara(money) {
//    console.log("singarar dam kto")
// }
// bringShingara(200);


// function movie(){

//    return "Din-The day";

//    return "Poran";

//    return "Hawa";

//  }

//  console.log(movie());

// function count(input) {
  
//   for (let i = 0; i < mathTable.length; i++) {
//     let values = mathTable[i];
//     let result = values * input;

//     // return result; 
//   }
//   return result;
// }
// let mathTable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]
// let x = count(2);
// console.log(x);



function sumOfArray(numbers) {
  sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const index = [i];
    const element = numbers[index];
    sum = sum + element;
    console.log(index, element, sum)
  }
  return sum
}
const myNumbers = [12, 32, 43, 54, 65, 76, 50, 32, 22, 33, 44, 55, 66, 98, 78, 75, 63, 25, 16];
sumOfArray(myNumbers);
