let nums = [9,6,4,2,3,5,7,0,1]
let n=nums.length; sumofN=0; arraySum=0;
 
function missingNumber(nums) {
    for(let i=0;i<=n;i++){
        sumofN=sumofN+i; //sum of at n'th times 0+.....+n 
        if(i!=n)
        arraySum=arraySum+nums[i]; //Sum of given array
    }
    return sumofN-arraySum
};

console.log(missingNumber(nums))