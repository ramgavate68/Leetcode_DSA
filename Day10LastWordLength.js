/*
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
*/
const LastWordLength = (str) => {
  let arr = [];
  let s = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      if (s) {
        arr.push(s);
      }
      s = "";
    } else {
      s += str[i];
    }
  }

  if (s) {
    arr.push(s);
  //  return s.length
  }
  console.log(arr.length);
  
  for (let i = 0; i < arr.length; i++) {
   console.log(arr[i],"\n");
   
  }
  console.log(arr);
  
  let l = arr.length-1
  return arr[l].length;
};

const str =  "   fly me   to   the moon  "
const res = LastWordLength(str);
console.log(res);
