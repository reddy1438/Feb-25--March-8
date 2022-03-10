var arr2=[0, 1, 2, 6, 9, 11, 15] 

function smallmissingNumber(nums){

for(var i=0;i<nums.length;i=i+1){
    if(nums[i] !=i){
        return i
    }
    
}
return nums.length
}

console.log(smallmissingNumber(arr2))
console.log(smallmissingNumber( [1, 2, 3, 4, 6, 9, 11, 15]))
console.log(smallmissingNumber([0, 1, 2, 3, 4, 5, 6]))