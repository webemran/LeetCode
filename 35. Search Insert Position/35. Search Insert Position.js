let nums=[1,3,4,6];
let target=3;

// function sip(nums,target){
// let start=0;
//     let end=nums.length-1;
//     let mid=Math.floor((start+end)/2);

//     while(start<=end){
//         mid=Math.floor((start+end)/2);
//         if(nums[mid]==target){
//             return mid
//         }
//         else if(nums[mid]>target){
//             if(nums[mid-1]<target){
//                 return mid;
//             }
//             else
//             end=mid-1;
//         }
//         else if(nums[mid]<target && nums[mid+1]==null){
//             return mid+1;
//         }
//         else if(nums[mid]>=target && nums[mid-1]<target){
//             return mid;
//         }
//         else if(nums[mid-1]<target && nums[mid]>target){
//             return mid;
//         }
//         else
//             start=mid+1;
//     }
//     return 0
// };
// console.log(sip(nums,target))

// function searchInsert(nums, target) {
//     let l=0
//     let r=nums.length - 1
//     while (l<=r) {
//         let m = Math.floor((l+r)/2)
//         let c = nums[m] 
//         if (c === target) {
//             return m
//         } 
//         if (c > target) {
//             r = m - 1
//         } else {
//             l = m + 1
//         } 
//     }
    
//     if (l>r) return l
//     return r
// } 
// console.log(sip(nums,target))

let b=0;
let e=nums.length-1;


function insp(nums,target){
    let mid=Math.floor((b+e)/2);
    while(b<=e){
        mid=Math.floor((b+e)/2);
        if(nums[mid]==target){
            return mid;
        }
        else if(nums[mid]>target){
            e=mid-1;
        }
        else
        b=mid+1;
    }
    return b;
}
console.log(insp(nums,target))
