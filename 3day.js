// Write a function to reverse only vowels in a string.


// function checkVowel(str)
// {
//     let vowel='aeiouAEIOU'

  
//     let vowelArray=[]

//     for(let ch of str){


//         if(/[a-z]/.test(ch)){
// if (vowel.includes(ch)){

//     vowelArray.push(ch)


// }

//         }

//     }
//     let left=0;
//     let right=vowelArray.length-1;

//     for(let i=0;i<vowelArray.length;i++){

//        [ vowelArray[left],vowelArray[right]]= [ vowelArray[right],vowelArray[left]];
//         left++;
//         right--;


//     }

//     console.log(vowelArray)

// }


// checkVowel("basketbell")



function checkVowel(str) {
  let vowels = "aeiouAEIOU";
  
  let arr=str.split("");
  let left=0;
  let right=arr.length-1;

  while(left<right){
    if(!vowels.includes(arr[left])){

        left++;
    }
   else if(!vowels.includes(arr[right])){

        right--;
    }
    else{
        [arr[left],arr[right]]=[arr[right],arr[left]];
        left++;
        right--;
    }
  }
  return arr.join("")
}

console.log(checkVowel("basketball")); // "beskatball"
console.log(checkVowel("hello"));      // "holle"
console.log(checkVowel("leetcode"));   // "leotcede"
