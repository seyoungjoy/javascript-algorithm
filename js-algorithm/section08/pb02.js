function solution(n){
    let answer="";
    function dfs(num){
        if(num === 0) return;
        dfs(Math.floor(num/2))
        answer += num%2;
    }
    dfs(n)

    return answer;
}

console.log(solution(11));