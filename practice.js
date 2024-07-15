// random number
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + 1;
}
console.log(random(3, 5));

// sort name alphabetically
const names = ["Modon", "Kodon", "Aam", "Jhonson", "Scarlet", "Hugo"];
console.log(names.sort());

// define the is a leap year or not
function isLeapYear(year) {
  if (year === 400 % 0 || (year === 4 % 0 && year !== 100 % 0)) {
    console.log(`${year} is leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
}
isLeapYear(2034);

// vowel count
const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowels(sentence) {
  let count = 0;
  const latter = Array.from(sentence);
  latter.forEach(function (value) {
    if (vowel.includes(value)) {
      count++;
    }
  });
  return count;
  // Blue Neutral Simple Minimalist Professional Web Developer Resume
}

console.log(countVowels("I am going to watch football match today"));
