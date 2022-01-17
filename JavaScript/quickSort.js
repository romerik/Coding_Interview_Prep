var quickSort = (array) => {
    if(array.length < 2)
        return array
    else{
        let pivot = array[array.length-1];
        let pivot_times = array.filter(x => x===pivot).length;
        let before_pivot = array.filter(x => x < pivot);
        let after_pivot = array.filter(x => x > pivot);
        return [...quickSort(before_pivot), ...Array(pivot_times).fill(pivot), ...quickSort(after_pivot)];
    }
}

console.log(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]));