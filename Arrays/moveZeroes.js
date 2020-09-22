var moveZeroes = function(nums) { 
    var len = 0;
    var zeroCount = 0;
    do {
      if (nums[len] === 0) {
        nums.splice(len,1);
        zeroCount++;
        continue;
      } 
      len++;
    } while ( len <= nums.length );
    for (i = 0; i < zeroCount; i++){
      nums.push(0);
    }
    return nums.length; 
};