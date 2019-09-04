function split (arr){
    if (arr.length === 0 || arr.length === 1) return arr;
    const midpoint = Math.ceil(arr.length/2)
    const firstHalf = arr.slice(0, midpoint)
    const secondHalf = arr.slice(midpoint)
    return [firstHalf, secondHalf]
}

function merge (arr1, arr2){
    const mergedArr = []
    while (arr1.length > 0 || arr2.length > 0) {
        if (arr1[0] === undefined){
            mergedArr.push(arr2[0])
            arr2.shift()
        } else if (arr2[0] === undefined){
            mergedArr.push(arr1[0])
            arr1.shift()
        }
        
        if (arr1[0] < arr2[0]){
            mergedArr.push(arr1[0])
            arr1.shift()
        } else if (arr1[0] > arr2[0]){
            mergedArr.push(arr2[0])
            arr2.shift()
        }
    }
    return mergedArr;
  }

function mergeSort(arr){
    if (arr.length < 2) return arr;
    const firstHalf = mergeSort(split(arr)[0])
    const secondHalf = mergeSort(split(arr)[1])
    return merge(firstHalf, secondHalf)
  }