function pairwise(arr, arg) {
    let pairs_index = [], sum_index = 0;
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] + arr[j]==arg && pairs_index.indexOf(i)==-1 && pairs_index.indexOf(j)==-1){
                pairs_index.push(i);
                pairs_index.push(j);
                sum_index+= i+j;
            }
        }
    }
    console.log(pairs_index);
    return sum_index;
  }
  
  console.log(pairwise([1, 3, 2, 4], 4));