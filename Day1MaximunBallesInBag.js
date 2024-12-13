var minimumSize = function(nums, maxOperations) {
    const isValid = (target) => {
        let operations = 0;
        for (let num of nums) {
            if (num > target) {
                operations += Math.floor((num - 1) / target);
            }
            if (operations > maxOperations) return false;
        }
        return true;
    };

    let left = 1, right = Math.max(...nums);
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (isValid(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};
const res =minimumSize([2,4,8,2],4)
console.log(res);
