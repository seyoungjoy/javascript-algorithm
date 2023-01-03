
function solution(n){
    function dfs(L){
        if(L===0) return;
        dfs(L-1)
        console.log(L)
    }
    dfs(n)
}

solution(3);