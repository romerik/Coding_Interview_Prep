var recursiveBinarySearch = (searchList, value) => {
    console.log(searchList);
    if(searchList.length<=1)
        return searchList;
    let arrayPath = [];
    let middle = Math.floor(searchList.length/2);
    arrayPath.push(searchList[middle-1]);
    if(value < searchList[middle-1])
        searchList = searchList.slice(0,middle);
    else if(value > searchList[middle-1])
        searchList = searchList.slice(middle);
    else
        searchList = [searchList[middle-1]];
    for(let val of recursiveBinarySearch(searchList, value))
        arrayPath.push(val);
    return arrayPath;
  }

  function binarySearch(searchList, value){
      let result = recursiveBinarySearch(searchList, value);
      console.log(result);
      return result[result.length-1]==value ? result.slice(0, result.length-1) : "Value Not Found";
  }

  const testArray = [
    0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 49, 70
  ];

  console.log(binarySearch(testArray, 1));