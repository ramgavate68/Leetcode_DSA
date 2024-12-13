const addTwo =(l1,l2)=>{
    let carry = 0;
    let result = [];
    let i = 0;

    while (i < l1.length || i < l2.length || carry > 0) {
        const digit1 = i < l1.length ? l1[i] : 0;
        const digit2 = i < l2.length ? l2[i] : 0;
        const sum = digit1 + digit2 + carry;
        result.push(sum % 10);
        carry = Math.floor(sum / 10);
        i++;
    }

    return result;
}
let l1 = [9, 9, 9, 9, 9, 9, 9];
let l2 = [9, 9, 9, 9];
const res = addTwo(l1,l2)
console.log(res);
