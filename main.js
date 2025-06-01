

console.log(fib(3));

function fib(num){
    if(num == 0) return [0];

    const arr = [0,1];


    for(let i = 1; i < num-1; i++){
        arr[i+1] = arr[i]+arr[i-1]
    }
    return arr;
}
