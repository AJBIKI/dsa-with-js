// //1️⃣ First Non-Repeating Character

// function frstNonrepet(string){
//     let freq=new Array(256).fill(0);

//     for (let ch of string){
//         freq[ch.charCodeAt(0)]++;
// }
// for (let ch of string){

//     if(freq[ch.charCodeAt(0)]===1) return ch;

// }

// return null;

// }


// console.log(frstNonrepet("leetcode"));
// console.log(frstNonrepet("yoyoSexy"));
// console.log(frstNonrepet("aabbcc"));




// 2️⃣ Count Words in String




// function countWord(str){

//     let inWord=false;
//     let count=0;

//     for (ch of str){
//         if(ch!==" "&& inWord==false){

//             inWord=true;
//             count++;


//         }
//         else if(ch==" "){
//             inWord=false;
//         }
//     }

//     return count;
// }

// console.log(countWord("I Love You"));



//3️⃣ Remove Duplicates from String

function removeDuplicate(str){

    let visited=Array(256).fill(false);

    let result="";

    for (ch of str){

        let idx=ch.charCodeAt(0);
        if(!visited[idx]){
            result+=ch;
            visited[idx]=true;
        }

    }

    return result;


}



console.log(removeDuplicate("leetcode"));
console.log(removeDuplicate("yoyoSexy"));
console.log(removeDuplicate("aabbcc"));