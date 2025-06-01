//const testnum = 4

//console.log(fibs(testnum));
//console.log(fibsRec(testnum));

function fibs(num) {
  if (num == 0) return [0];

  const arr = [0, 1];

  for (let i = 1; i < num - 1; i++) {
    arr[i + 1] = arr[i] + arr[i - 1];
  }
  return arr;
}

function fibsRec(num) {
  if (num == 0) return [];
  else if (num == 1) return [0];
  else if (num == 2) return [0, 1];

  const seq = fibsRec(num - 1);
  seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
  return seq;
}

const testArr = [3, 2, 1, 13, 8, 5, 0, 1];

console.log(mergeSort(testArr));

function mergeSort(arr) {
  if (arr.length == 1) return arr;

  const mid = arr.length / 2;
  const firsthalf = mergeSort(arr.slice(0, mid));

  const sechalf = mergeSort(arr.slice(mid, arr.length));

  return merge(firsthalf, sechalf);
}

function merge(first, sec) {
  const newArr = [];

  var j = 0;
  var k = 0;
  for (let i = 0; i < first.length + sec.length - 1; i++) {
    if (first[j] <= sec[k]) {
        newArr.push(first[j]);
        j++; 
    } else if (first[j] > sec[k]) {
        newArr.push(sec[k]);
        k++;
    }
  }

  while (first.length != j){
    newArr.push(first[j]);
    j++;
  }
  while (sec.length != k){
    newArr.push(sec[k]);
    k++;
  }
  return newArr;
}
