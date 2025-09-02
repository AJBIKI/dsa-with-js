// //maximum subarray sum (kaden)

// function maxSubArraySum(arr){
//     let sum=0;
//     let max=-Infinity;

//     for (i=0;i<arr.length;i++){
//         sum=sum+arr[i];
//         max=Math.max(sum,max);
//         if(sum<0){
//             sum=0;
//         }
//     }
//     return max

// }

// let array=[3,4,2,6,-2,-7,-5,20]

// console.log(maxSubArraySum(array))


//optimal brutforce 


// function maxSubArraySum(arr){
// let max=-Infinity
//     for (i=0;i<arr.length;i++){
//         let sum=0;
//         for(j=0;j<arr.length;j++){
//             sum=sum+arr[j];

//             max=Math.max(sum,max)

//         }
//     }

//     return max

// }

// let array=[3,4,2,6,-2,-7,-6,20]

// console.log(maxSubArraySum(array))



//Smallest Subarray with Sum ≥ K 


// function FindArraySum(arr,k){
// let min=Infinity
//     for (i=0;i<arr.length;i++){
//         let sum=0;
    
//         for(j=i;j<arr.length;j++){
//             sum=sum+arr[j];

//             if(sum>=k){

//               let  it=j-i+1;


//                 min=Math.min(it,min)


//                  break 

//             } 

            

//         }
//     }

//     if(min>0){

//          return min
//     }

//     else return 0;
   

// }

// let array=[3,1,-2,5,-2,-7,-6]
// let k=6

// console.log(FindArraySum(array,k))


//Smallest Subarray with Sum ≥ K (Sliding Window)


function FindArraySum(arr,k){

let minwindoeSize=Infinity;
let  left=0;
let sum=0;

for(let right=0;right<arr.length;right++){

    sum=sum+arr[right];

    while(sum>=k){

        minwindoeSize=Math.min(minwindoeSize,right-left+1)

        sum=sum-arr[left]

        left++
    }

   

}
 return minwindoeSize===Infinity?0:minwindoeSize;


}




let array=[3,1,-2,6,-2,-7,-6]
let k=6

console.log(FindArraySum(array,k))