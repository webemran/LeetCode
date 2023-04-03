
let letters=["c","c","c","c","c","c","f","f","f","f","f","f","f","j"];
let target="f";

function nextGreatestLetter(letters, target) {
    let len=letters.length;
    let start=0;
    let end=len-1

    while(start<=end){
        mid=Math.floor((start+end)/2);        
        if(letters[mid]<=target)
            start=mid+1;
        else
            end=mid-1;
    }
    return letters[start % len];
};

console.log(nextGreatestLetter(letters,target));
