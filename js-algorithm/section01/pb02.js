// solution 1
function solution1(a, b, c){
    let answer = "no";
    if(a+b > c){
       if(b+c > a){
           if(a+c > b){
               answer = "yes"
           }
       }
    }
    return answer;
}

// solution 2
function solution(a, b, c){
    let answer = '';
    let total = a+b+c;
    let max = a;
    if(a>b) max=a;
    else max=b;
    if(max<c) max=c;
    if(total-max > max){
        answer="YES"
    } else{
        answer="NO"
    }

    return answer;
}

console.log(solution(6,7,11));
console.log(solution(13, 33, 17));