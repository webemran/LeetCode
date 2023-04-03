let arr=[3,3,7,7,10,11,11]

function singleNumber(nums){
    let start=0;
    let end=nums.length-1;
    let mid=Math.floor((start+end)/2);
    if(end==0){
        return nums[0];
    }
    else if(nums[0]!=nums[1]){
        return nums[0];
    }
    else if(nums[end]!=nums[end-1]){
        return nums[end];
    }

    while(start<=end){
        mid=Math.floor((start+end)/2);
       
        if((nums[mid]!=nums[mid-1]) && (nums[mid]!=nums[mid+1])){
            return nums[mid];
        }
        else if(((mid%2==0)&&(nums[mid]==nums[mid+1])) || ((mid%2==1)&&(nums[mid]==nums[mid-1]))){
                start=mid+1;
        }
        else {
            end=mid-1;
        }
    }
    return -1;
};
console.log(singleNumber(arr))