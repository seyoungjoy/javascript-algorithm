// 전위순회 : 부 왼 오
// 중위순회 : 왼 부 오
// 후위순회 : 왼 오 부

function solution(n){
    let answer="";
    // 왼쪽 노드 * 2
    // 오른쪽 노드 * 2 + 1
    function dfs(num){
        if(num > 7) return;
        dfs(num * 2);
        dfs(num * 2 + 1);
        console.log(num)

    }
    dfs(n);

    return answer;
}

console.log(solution(1));