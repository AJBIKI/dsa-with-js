function isAnagramDsa(str1,str2){
    // str1=str1.toLowercase();
    // str2=str2.toLowercase();
    if(str1.length!==str2.length) return false;

    let freq=new Array(26).fill(0);

    for(let i=0;i<str1.length;i++){
        freq[str1.charCodeAt(i)-97]++;
        freq[str2.charCodeAt(i)-97]--;

    }
    for (let count of freq){

        if(count!==0) return false;


    }
    return true;

}

console.log(isAnagramDsa("listen", "silent")); // true
console.log(isAnagramDsa("hello", "bello"));   // false