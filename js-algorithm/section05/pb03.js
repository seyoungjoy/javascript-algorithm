// two pointers => O(n)
function solution(m, arr){
   let answer = 0;
   let n = arr.length;
   let lp = rp = 0;
   let sum = 0;
   while(rp < n){
       if(sum<m){
           sum += arr[rp++];
       } else if(sum>m){
           sum -= arr[lp++];
       } else{
           sum -= arr[lp++];
           answer ++;
       }
   }
    return answer;
}

let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));