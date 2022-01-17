
var recusive_bubble = function(array, n) {
    // Only change code below this line
    if(n==1)
        return array;
    else{
        for(let i=0; i<n-1; i++){
            if(array[i]>array[i+1])
            [array[i], array[i+1]] = [array[i+1], array[i]];
        }
        return recusive_bubble(array, n-1);
    }
    // Only change code above this line
  }

function bubbleSort(array){
    return recusive_bubble(array, array.length);
}

console.log(bubbleSort([-5, 2, 33, 10, -7]));