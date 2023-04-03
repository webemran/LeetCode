let nums = [48,90,9,21,31,35,19,69,29,52,100,54,21,86,6,45,42,5,62,77,15,38]
let n=nums.length
let end=n-1;
let sindex=0;
let result=[];

function sortandFindInsertPossition(nums,target){
let temp=0;
for(let i=0;i<end; i++){
    for(let j=0;j<end-i;j++){
        if(nums[j]>nums[j+1]){
            temp=nums[j];
            nums[j]=nums[j+1];
            nums[j+1]=temp;
        }
    }
}
console.log(nums);
//find the existing index
for(let i=0;i<=end;i++){
    if(nums[i]==target){
        result.push(i);
    }
}
if(result !=''){
    return result;
}
// find the index possition if data not exist
else{
while(sindex<=end){
    let mid=Math.floor((sindex+end)/2);
    if(nums[mid]>=target){
        end=mid-1;
    }
    else
    sindex=mid+1;
}
if(sindex==1 && n==1){
    return [];
}

else if(sindex==n){
    if(sindex==nums.length){
        return []
    }
    else
    return n;
}
else{
    return [];
}

}

};

console.log(sortandFindInsertPossition(nums,6));

function test(nums,target){
    nums.sort((a, b) => { return a - b })
    console.log(nums);
    let arr = [];
    for (let i = nums.indexOf(target); i < nums.length; i++) {
        console.log(nums[i])
        console.log(nums.indexOf(target))
        if (nums[i] !== target) {
            return arr
        } else {
            arr.push(i)
        }
    }
    return arr;
};
console.log(test(nums,6));
