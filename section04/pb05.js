function solution(k, card){
    let answer;
    let leng = card.length;
    let setArr = new Set([]);
    // 1) 3장을 뽑는 경우의 수를 3중 for문으로 모두 구함.
    for(let i=0; i<leng; i++){
        for(let j=0; j<leng; j++){
            if(i!==j){
                for(let k=0; k<leng; k++){
                    if(k!==j&&k!==i){
                        // 2) Set 객체에 추가해 중복된 요소는 제외
                        setArr.add(card[i]+card[j]+card[k]);
                    }
                }
            }
        }
    }
    // 3) set 객체를 배열로 만든 후 내림차순 정렬
    // 4) k-1번째에 있는 값 추출.
    answer = [...setArr].sort((a,b)=>b-a)[k-1];
    return answer;
}

let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(3, arr));