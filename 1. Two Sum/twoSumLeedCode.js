var twoSum=function(nums, target) {
    for(let i=0; i<=nums.length;i++){
        for(let j=1;j<nums.length;j++){
            if(i==j && nums[i]==nums[j]){
                j=+j;
            }
            else if(nums[i]+nums[j]==target){
                number=[i,j];
                return number;
            }
        }
    }
    Math.
};