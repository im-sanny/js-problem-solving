// random number
function random (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + 1;
}
console.log(random(3, 5));

// sort name alphabetically
const names = ['Modon', 'Kodon', 'Aam', 'Jhonson', 'Scarlet', 'Hugo'];
console.log(names.sort());