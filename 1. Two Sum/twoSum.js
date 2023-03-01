let nums=[2,7,11,15];
const target=9;
function twoSum(nums, target) {
    let sum=0;
    for(let i=0; i<=nums.length;i++){
        sum=nums[i]+nums[i+1];
        if(sum==target){
            return `[${i},${i+1}]`;
        }
        else 
         i=i;
    }
    return `target not found!`   
};

console.log(twoSum(nums,target));