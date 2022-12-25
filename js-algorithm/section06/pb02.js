// () 소괄호 사이에 존재하는 문자 제거하고 남은 문자만 출력

function solution1(s){
    let answer = '';
    let stack = [];
    for(let x of s){
        // 문자가 먼저 나오는 경우 -> stack 안에 아무것도 없고, x가 (,)가 아니라면 push
        // () 괄호 사이에 있는 문자들을 모두 무시해버리고
        // 괄호가 모두 닫혀서 stack에 아무것도 존재하지 않고
        // (,)도 아닐때는 괄호 사이에 있는 문자가 아니기 때문에
        // 그때 푸쉬!
        if(stack.length ===0 && x !== "(" && x !== ")") answer += x;
        if(x === "(") stack.push(x);
        else if(x === ")") stack.pop();
    }

    return answer;
}
/*
* let arr = [1,2,3];
* let pop = arr.pop();
* console.log(pop); //3
* pop 했을 때의 반환되는 값은 array의 마지막 값.
* */

function solution(s){
    let answer;
    let stack=[];
    for(let x of s){

        if(x===')'){
            while(stack.pop() !== "(");
        }
        else stack.push(x);
    }
    answer=stack.join('');
    return answer;
}

let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));