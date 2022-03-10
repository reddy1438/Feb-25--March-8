var arr=[1,1,2,2,4,5,5,6,6,6,6,9,10,11]
var x=6;
let binary =function(arr,x,flag){
    var start=0;
    var end=arr.length-1;
    var mid=0;
    var result=-1
    while(start<=end){
        mid=Math.floor(start+(end-start)/2)
        
        if(arr[mid]===x){
            result= mid;
            if(flag==true){
                start=mid+1
            }
            else{
                end=mid-1
            }
        }
        
        else if(arr[mid]<x){
            start=mid+1
        }
        else{
            end=mid-1;
        }

    }
   return result;

}
let uper=(binary(arr,x,true))
let lower=(binary(arr,x,false))

console.log(uper-lower+1)