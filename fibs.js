const fibonacci = document.querySelector(".fibo")
function fibs(n,arr = [0,1]){
    if(arr.length >=n){
        return arr;
    }
    else{
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return fibs(n, arr);
    }
}

// console.log(fibs(8));

document.write("The sorted array will be: ",fibs(8));