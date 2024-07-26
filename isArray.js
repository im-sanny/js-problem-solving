const names = ["tom", "jerry", "bulldog", "butch", ""];
const cattle = ["cow", "hen", "duck", "goat", "sheep"];
console.log(Array.isArray(names));

const yolo = "loyo";
console.log(Array.isArray(yolo));

console.log(names.join("|"));

console.log(names.concat(cattle));

console.log(names.slice(2, 3));
