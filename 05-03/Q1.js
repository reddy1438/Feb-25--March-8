var arr=[
    [1,2,3],
    [2,7,5],
    [9,0,9]
]

function PrintElement(nums){
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < nums.length; j++)    {
            console.log(nums[i][j]);
        }
       
    } 
}

PrintElement(arr)