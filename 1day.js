// let arr=[5,6,7,3,2,1];
// let min=arr[0];
// let max=arr[0];

// for(let i=0;i<arr.length;i++){
//     if(arr[i]<min){
//         min=arr[i]
//     }
//     if(arr[i]>max){
//         max=arr[i]
//     }
    
    
// }
// console.log(max)
// console.log(min)


//Linear search element.

// let numbs=[5,6,7,3,2,1];

// let trgt=7;

// function LinearSearch(arr,target){

//   for(let i=0;i<arr.length;i++){
//     if(arr[i]==target){
//         return  i
//     }
//   }

// }

// console.log(LinearSearch(numbs,trgt));



// //binary search

// let numbs=[1,2,3,4,5,6,7,8,9];

// let trgt=7;

// function binarySearch(arr,target){

//     let strt=0
//     let end=arr.length-1;
  
// while (strt<=end) {

//       let mid=Math.floor((strt+end)/2);
    
//         if(arr[mid]==target){
//             return mid;
//         }
//         else if(arr[mid]<target){
//             strt=mid+1;
//         }
//         else {
//             end=mid-1
//         }
// }

// return -1

// }

// console.log(binarySearch(numbs,trgt))




//binary search using recursion

// let numbs=[1,2,3,4,5,6,7,8,9];

// let trgt=7;
//   let strt=0
//     let end=numbs.length-1;

// function binarySearch(arr,target,start,ende){

  
  
// while (start<=ende) {

//      let mide=Math.floor((start+ende)/2);

      
    
//         if(arr[mide]==target){
//             return mide;
//         }
//         else if(arr[mide]<target){
//             binarySearch(arr,target,start=mide+1,ende);
//         }
//         else {
//             binarySearch(arr,target,start,ende=mide-1); 
//         }
// }

// return -1

// }

// console.log(binarySearch(numbs,trgt,strt,end))



// //reverseArrayExtraSpace

// function reverseArrayExtraSpace(arr){

//     let reverseArray=[];

//     for(let i=arr.length-1;i>=0;i--){
//         reverseArray.push(arr[i]);
//     }

//     return reverseArray;
// }
// let numbs=[1,2,3,4,5,6,7,8,9];
// console.log(reverseArrayExtraSpace(numbs))


//reverseArrayWithoutExtraSpace

function reverseArrayWithoutExtraSpace(arr){

let left=0;
let right=arr.length-1;

while(left<right){
    [arr[left],arr[right]]=[arr[right],arr[left]];
    left++;
    right--;

}

    return arr;
}
let numbs=[1,2,3,4,5,6,7,8,9];
console.log(reverseArrayWithoutExtraSpace(numbs))