const ValidParentheses = (str) => {
    const stack=[]
  const matchingBrackets = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
        return false; 
      }
    }
  }

  return stack.length === 0;
};

const res = ValidParentheses("()");
console.log(res);

