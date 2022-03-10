var intersection = function(nums1, nums2) {
    const arr = [];
const shortest = nums1.length < nums2.length ? nums1 : nums2;
for(const num of shortest) {
  
    if(nums1.includes(num) && nums2.includes(num) && !arr.includes(num)) {
        arr.push(num);
    }
}
return arr;

};

console.log(intersection([1,2,2,1],
    [2,2]))