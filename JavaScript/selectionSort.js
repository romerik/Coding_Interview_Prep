var recusive_selection = (array, n)=>{
    if(n==array.length-1)
        return array;
    else{
        let min = Math.min.apply(null, array.slice(n));
        let min_index =  array.slice(n).indexOf(min) + n;
        [array[n], array[min_index]] = [min, array[n]]
        return recusive_selection(array, n+1);
    }

}

function selectionSort(array){
    return recusive_selection(array, 0);
}

console.log(selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]));
