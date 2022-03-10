let arr1=['a','b','d','e','f','g','h','i','x','z']

var z='z'


let binary1=function(arr1,z){
    var start=0
    var end=arr1.length-1;

    while(start<=end){
        var mid=Math.floor(start+(end-start)/2)

        if(arr1[mid]===z){
            return mid
        }
        else if(arr1[mid]<z){
            start=mid+1
        }
        else{
            end=mid-1
        }
    }
    return -1
}
let result=binary1(arr1,z)
if(result==-1){
console.log("Not Found")
}
else{
    console.log(result)
}