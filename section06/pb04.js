// 후위식 연산
function solution(s){
    let answer;
    let stack = [];
    // 문자열은 이터러블객체라 for of 사용가능.
    for(let x of s){
        if(!isNaN(x)) stack.push(Number(x));
        else{
            let rt = stack.pop();
            let lt = stack.pop();
            if(x==="+") stack.push(lt+rt);
            else if(x==="*") stack.push(rt*lt);
            else if(x==="-") stack.push(lt-rt);
            else if(x==="/") stack.push(lt/rt);
        }
    }
    answer = stack[0];
    return answer;
}

let str="352+*9-";
console.log(solution(str));