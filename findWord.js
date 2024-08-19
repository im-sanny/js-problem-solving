// in the sentence bellow how many they used the word "lorem"?

const sentence =
  "ipsum dolor sit lorem consectetur adipisicing elit. Sint magnam tempore id. Inventore fugiat corporis adipisci voluptatum accusamus distinctio eius veniam repellat totam modi lorem placeat, consequuntur lorem provident dicta. Itaque sequi natus voluptates eligendi id. Ex recusandae porro, veniam architecto dolorum voluptas nobis alias provident laborum minus aspernatur lorem";

const matches = sentence.match(/lorem/gi);
const occurrence = matches ? matches.length : 0;

console.log(occurrence);

let position = sentence.search(/lorem/i);
position = position >= 0 ? position : "not found!";

console.log(position);
