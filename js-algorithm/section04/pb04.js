function solution(m, product){
     // 상품 하나는 50% 세일 가능(배송비 불포함)
    // 현재 예산으로 선물할 수 있는 최대 학생수
    // 예산은 28만원
    // 학생수는 5명
    // 상품 하나 중 가장 비싼 가격을 찾아 50% 반값 만듬.
    // 완전 탐색
    // 반값을 만들 대상을 가장 큰 가격으로 잡을 순 없음(배송비 때문에)
    // 그래서 각각의 요소들을 모두 반값으로 만들어 모든 경우의 수를 생각해봐야함.
    let answer=0;
    let leng = product.length;
    let max = m;
    // let cnt = 0;
     product.sort((a,b) => (a[0]+a[1]) - (b[0]+b[1]));
     for(let i=0; i<leng; i++){
        max -= (product[i][0]/2 + product[i][1])
        let cnt = 1;
        for(let j=0; j<leng; j++){
            if(product[i] !== product[j] && max < product[j][0] + product[j][1]) break;
            if(product[i] !== product[j] && max >= product[j][0] + product[j][1]){
                max -= (product[j][0]/2 + product[j][1]);
                cnt ++;
            }
        }
        answer = Math.max(answer,cnt);
    }

    return answer;
}

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));