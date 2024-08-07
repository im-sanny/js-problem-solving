const numbers = [1, 2, 3, 4, 5, 6, 7, 3, 5, 1, 3];

const duplicate = numbers.filter(function (value, index, array) {
  return array.indexOf(value) !== index;
});

console.log(duplicate);


const num  = [1, 2, 2, 3, 4, 5, 6, 5, 6, 7, 5, 3, 8, 9];

const double = numbers.filter(function(value, index, array){
  return array.indexOf(value) !== index;
})
console.log(double);