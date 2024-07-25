// print a random number between 1 to 6
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + 1;
}
console.log(getRandomNumber(1, 6));

// how to get random number in specified range
function specifiedRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(specifiedRange(50, 60));

// whats wrong in this ?
// function getRandomNumber (max, min){
//   return Math.floor(Math.random() * (max - min + 1)) + 1;
// }
// console.log(getRandomNumber(1, 3));