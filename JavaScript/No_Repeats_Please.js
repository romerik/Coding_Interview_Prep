function hasNotRepeat(str){
    if(str.length<=1)
        return true;
    else{
        let mySet = new Set(str);
        for(let character of mySet){
            let index = str.indexOf(character);
            if(index!=str.length-1){
                if(str[index]==str[index+1])
                    return false;
            }
        }
        return true;
    }
}

let findPermutations = (string) => {
    if (!string || typeof string !== "string"){
      return "Please enter a string"
    } else if (string.length < 2 ){
      return string
    }
  
    let permutationsArray = [] 
     
    for (let i = 0; i < string.length; i++){
      let char = string[i]
  
      //if (string.indexOf(char) != i)
      //continue
  
      let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
  
      for (let permutation of findPermutations(remainingChars)){
          if(hasNotRepeat(char + permutation)){
            permutationsArray.push(char + permutation)
          }
         }
    }
    return permutationsArray;
  }


  function permAlone(str) {
    return findPermutations(str).length;
  }
  
  console.log(permAlone('aab'));
  