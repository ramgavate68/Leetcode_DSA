var plusOne = function (digits) {
    let carry = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        let sum = digits[i] + carry;
        digits[i] = sum % 10;
        carry = Math.floor(sum / 10);

        if (carry === 0) break;
    }
    if (carry > 0) {
        digits.unshift(carry);
    }
    return digits;
};
const digits =[4,3,2,1]
const res = plusOne(digits)
console.log(res);
