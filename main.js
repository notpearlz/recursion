const testnum = 4

console.log(fibs(testnum));
console.log(fibsRec(testnum));


function fibs(num){
    if(num == 0) return [0];

    const arr = [0,1];


    for(let i = 1; i < num-1; i++){
        arr[i+1] = arr[i]+arr[i-1]
    }
    return arr;
}

function fibsRec(num){
    if(num == 0) return [];
    else if(num == 1) return [0];
    else if(num == 2) return [0,1];

    const seq = fibsRec(num-1);
    seq.push(seq[seq.length-1] + seq[seq.length-2]);
    return seq
}