/*
Input: nums = [1,1,2]
Output: [1,2,_]
*/
const removeSorted = (nums) => {
  let res = [];
  let uniq = Array.from(new Set(nums));
  uniq.sort((a, b) => b + a);
  console.log(uniq);
  res.push(...uniq);
  for (let i = res.length; i < nums.length; i++) {
    res.push("_");
  }
  return res;
};
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const res = removeSorted(nums);
console.log(res);
