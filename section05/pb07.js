// 아나그램(해쉬)
// 알파벳 나열순서는 나른데 구성은 일치하는 단어를 아나그램이라고 한다.
// 아나그램을 판별하는 알고리즘을 구현
// 조건1 대소문자 구분

function solution1(str1, str2){
    // Map으로 해결할 수 있을거같다.
    // Map 객체로 만들어서 이중for문으로 돌리며 확인해보려고 했는데
    // ["a", 1] === ["a", 1] 이 조건이 false가 나오기 때문에 같은 요소인지 비교할수가 없었다..
    // let map1 = new Map([["a", 1],["b", 3],["c", 2]]);
    // let map2 = new Map([["a", 1],["b", 3],["c", 2]]);
}

function solution2(str1, str2){
    // a를 hasp map으로 만들고
    // b를 반복문으로 돌려 a의 key값과 일치할때마다 해당 요소값을 값을 상쇄시키는 방법으로 구분.
    let answer="YES";
    // 1) 첫번째 단어의 hash map 생성
    let map = new Map();
    for(let x of str1){
        if(map.has(x)) map.set(x,map.get(x)+1);
        else map.set(x,1);
    }
    // Map(5) { 'A' => 2, 'b' => 1, 'a' => 1, 'e' => 2, 'C' => 1 }
    // 2) 두번째 단어를 첫번째 해쉬맵과 비교하여 값 상쇄
    // 이때 들고오려는 요소값이 0이면 해당 문자가 추가로 있는것이기 때문에 NO 반환.
    for(let y of str2){
        // if(map.has(y)){
        //     if(map.get(y) === 0) return answer="NO"
        //     else map.set(y,map.get(y)-1)
        // }
        // else answer="NO"

        if(!map.has(y) || map.get(y)===0) return "NO"
        else map.set(y,map.get(y)-1)
    }
    return answer;
}

let a="baeeACA";
let b="baeeACA";
console.log(solution(a, b));