function split(arr) {

  /* your code here to define the firstHalf and secondHalf arrays */

  let half = 0
  if(arr.length%2 === 1){
    half = (arr.length -1) / 2;
  } else {
    half = arr.length / 2;
  }
  let firstHalf = arr.slice(0, half);
  let secondHalf = arr.slice(half, arr.length);

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let finalArr = [];
  //base case
  if (!arr1.length){
    return finalArr.concat(arr2);
  }
  if (!arr2.length) {
    return finalArr.concat(arr1);
  }
  if(arr1[0] < arr2[0]) {
    return finalArr.push(arr1[0], merge(arr1.slice(1), arr2));
  } else {
    return finalArr.push(arr1[0], merge(arr1.slice(1), arr2));
  }
}
