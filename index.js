function findMinAndRemove(array){
  let min = array[0];
  let minIndex = 0;
  for (i=0; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
      minIndex = i;
    }
  }
  array.splice(minIndex, 1)
  return min;
}

function insertionSort(array){

}
