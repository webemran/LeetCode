let arr=[];
let target=6;




var searchRange = function(nums, target) { //For Finding first index
    let start=0;
    let ans=-1;
    let end=arr.length-1;
    let mid=Math.floor((start+end)/2);
    while(start<=end){
        if(nums[mid]==target){
            ans=mid;
            end=mid-1;
        }
        else if(nums[mid]<target){
            start=mid+1;
        }
        else{
            end=mid-1
        }
        mid=Math.floor((start+end)/2);
    }
    ans
//For Finding last index
    let s=0;
    let e=arr.length-1;
    let lans=-1;
    let lmid=Math.floor((s+e)/2)
    while(s<=e){
        if(nums[lmid]==target){
            lans=lmid;
            s=lmid+1;
        }
        else if(nums[lmid]<target){
            s=lmid+1;
        }
        else{
            e=lmid-1;
        }
    
        lmid=Math.floor((s+e)/2)
    }
    lans

    if(nums==['']){
        return [-1,-1];
    }
    else
    return [ans, lans]

};

console.log(searchRange(arr,target));