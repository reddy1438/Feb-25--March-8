var target=4;

function indexFind(nums,t){
    var i=0;
    while(i<nums.length){
        if(nums[i]==t){
            return i;
        }
        else if(nums[i]>t){
            return i;
        }
        else{
            i++;
        }
    }
    return nums.length;
}

console.log(indexFind([1,2,3,5,6],target))