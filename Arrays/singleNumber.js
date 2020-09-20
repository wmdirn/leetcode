var singleNumber = function(nums) {
  nums.sort();
  do {

    if (nums[0] === nums[1]) {
      nums.splice(0,1);
      nums.splice(0,1);
      console.log(nums);
    } else {break;}

  } while (nums.length >= 1);

  return nums[0];

};