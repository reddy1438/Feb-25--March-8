var arr=[2,7,11,15]
var x=9
function Search(numbers,target){
    let left = 0,
    right = numbers.length - 1;

  while (left < right) {
    const currentSum = numbers[left] + numbers[right];
    if (currentSum === target) {
      return [left+1, right+1];
    }
    if (target < currentSum) {
      right--;
    } else if (target > currentSum) {
      left++;
    }
  }
}

console.log(Search(arr,x))