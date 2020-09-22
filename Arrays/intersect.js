var intersect = function(nums1, nums2) {
    const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
    let result = [];
    for(i = 0; i < nums1.length; i++) {
      for (j = 0; j < nums2.length; j++) {
        if (nums1[i]===nums2[j]) {
          if (countOccurrences(result,nums1[i]) >= 
              Math.min(countOccurrences(nums1,nums1[i]), countOccurrences(nums2,nums1[i])) ) {
            continue;
          } else {
            result.push(nums2[j]);
          }
        }
      }  
    }
    return result;
};