var merge = (arr1, arr2) => {
    let arr = [];
    while(arr1.length!=0 && arr2.length!=0){
        arr.push(arr1[0]<arr2[0] ? arr1.shift() : arr2.shift());
    }
    if(arr1.length==0)
        arr = [...arr, ...arr2];
    if(arr2.length==0)
        arr = [...arr, ...arr1];
    return arr;
}

function mergeSort(array) {
    if(array.length < 2)
        return array;

    let i = Math.floor(array.length/2);

    return merge(mergeSort(array.slice(0,i)), mergeSort(array.slice(i)));
}

console.log(mergeSort([1,4,2,8,345,123,43,2,55,1,234,92]));