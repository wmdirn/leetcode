var twoSum = function(nums, target) {
    var twoSum = [];
    for (i=0; i < nums.length; i++) {
        for (j=0; j < nums.length; j++) {
            if (i===j) {continue;}
            if (nums[i] + nums[j] === target) {
                twoSum.push(i,j);
                return twoSum;
            }
        }
    }
    return twoSum;
};