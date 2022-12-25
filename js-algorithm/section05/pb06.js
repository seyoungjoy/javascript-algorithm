// 학급 회장(해쉬) #
// 가장 많은 문자열 출력.

function solution(s){
    // 나의 해결법
    // 후보자와 득표수를 키값으로 가지는 객체를 만들어서
    // 반복문을 돌려 해당값일 때 카운트해준다.
    let answer;
    let sum = 0;
    let ca = {
        A:0,
        B:0,
        C:0,
        D:0,
        E:0,
    }
    for(let i=0; i<s.length; i++){
        if(s[i]==="A") ca.A++;
        else if(s[i]==="B") ca.B++;
        else if(s[i]==="C") ca.C++;
        else if(s[i]==="D") ca.D++;
        else if(s[i]==="E") ca.E++;
    }
    // 결과가 아래와 같이 나오면
    // { A: 3, B: 3, C: 5, D: 2, E: 2 }
    // 객체 반복문을 돌려 최대값일때의 키를 반환한다.
    for(let x in ca){
        if(ca[x] > sum){
            sum = ca[x];
            answer = x;
        }
    }
    return answer;
}

function solution2(){
    // Map을 이용하면 위 코드의 양을 줄이고 간단하게 해결할 수 있다.
    let answer;
    let map = new Map();

    for(let x of s){
        if(map.has(x)) map.set(x, map.get(x)+1);
        else map.set(x,1);
    }
    // Map(5) { 'B' => 3, 'A' => 3, 'C' => 5, 'D' => 2, 'E' => 2 }
    let max = 0;
    for(let [key, val] of map){
        if(val > max){
            max = val;
            answer = key;
        }
    }
    return answer;
}

let str="BACBACCACCBDEDE";
console.log(solution(str));