
//Second Largest Element

// function secondLarge(arr){

//     let largest=-Infinity;
//     let secondLarge=-Infinity;


//     for (let num of arr){
//         if(num>largest){
//             secondLarge=largest;
//             largest=num;
//         }
//         else if(num>secondLarge&&num==largest){
//             secondLarge=num;

//         }
//     }

//     return secondLarge
// }


// let arr=[5,4,6,3,10]
// console.log(secondLarge(arr))


// 2️⃣ Rotate Array by K

// function rotateArray(arr,k){

//     let n=arr.length;

//     function reverse(start,end){

//         while(start<end)
//         {

//             [arr[start],arr[end]]=[arr[end],arr[start]]
//             start++;
//             end--;
//         }

//     }

//     reverse(0,n-1);
//     reverse(0,k-1);
//     reverse(k,n-1);

//     return arr;


// }


// let arr=[5,4,6,3,10]
// console.log(rotateArray(arr,3))


//Missing Number in Array



function missingNumber(arr,n){
    

    let sum=(n*(n+1))/2;

    let ActualSum=0;
    for (num of arr) ActualSum+=num;
    let missingNumberr=sum-ActualSum;

    return missingNumberr
}


let arr2=[1,2,3,4,5,7]
console.log(missingNumber(arr2,7))