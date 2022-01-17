var recursive_insertion = (array, index) => {
    if(index==array.length)
        return array;
    else{
        for(let i=index; i>0; i--){
            if(array[i-1] > array[i]){
                [array[i-1], array[i]] = [array[i], array[i-1]];
            }
        }
        return recursive_insertion(array, index+1);
    }
}

function insertionSort(array){
    if(array.length < 2)
        return array;
    else
        return recursive_insertion(array, 1);
}

console.log(insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]));