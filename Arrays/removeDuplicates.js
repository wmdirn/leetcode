var removeDuplicates = function(nums) {
    for (i = 0; i < nums.length; i++) {
        for (j = 0; j < nums.length; j++) {
            if (nums[i]===nums[j] && i !== j) {
                nums[j] = 'x'; 
            }
        }
    }
    var initLen = nums.length-1;
    do {
      if (nums[initLen]==='x') { nums.splice(initLen,1);}
      --initLen;
    } while (initLen >0)
    return nums.length;
};