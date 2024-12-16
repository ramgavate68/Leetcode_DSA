const frequencySort = (nums) => {
    let freqMap = {};
    for (let num of nums) {
      freqMap[num] = (freqMap[num] || 0) + 1;
    }
    let sorted = nums.sort((a, b) => {
      if (freqMap[a] !== freqMap[b]) {
        return freqMap[a] - freqMap[b];
      }
      return b - a;
    });
  
    return sorted;
  };
  
  const nums = [1, 1, 2, 2, 2, 3];
  const result = frequencySort(nums);
  console.log(result);
  
  // Output: [3, 1, 1, 2, 2, 2]
  