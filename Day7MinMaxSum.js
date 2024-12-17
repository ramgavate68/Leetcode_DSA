function minMaxSum(arr) {
    arr.sort((a, b) => a - b);
    const totalSum = arr.reduce((acc, val) => acc + val, 0);
    const minSum = totalSum - arr[arr.length - 1];
    const maxSum = totalSum - arr[0];
    return [minSum, maxSum];
}

const arr = [1, 3, 5, 7, 9];
console.log(minMaxSum(arr).join(" "));
