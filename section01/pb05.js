function solution(arr){
    let min = arr[0];
    for(let i = 0; i<arr.length; i++){
        if(arr[i]<min) min = arr[i]
    }
    return min;

}
console.log(solution([5,3,7,11,2,15,17]));
