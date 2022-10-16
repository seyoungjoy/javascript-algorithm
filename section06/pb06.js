// 베스킨라빈스 31 게임

function solution(n, k){
    let que = Array.from({length:n}, (_,i)=>i+1);
    let count = 0;
    while(que.length !== 1){
        count ++;
        if(count===k){
            que.shift();
            count=0;
        }
        else{
            que.push(que.shift());
        }
    }
    return que[0];
}

console.log(solution(8, 3));