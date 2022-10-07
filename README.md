# Javascript algorithm
## Section 4 완전 탐색(블루투포스)
| No  | Title                           | Difficulty | Review |
|:---:|---------------------------------|:----------:|--------|
|  1  | [자리수의 합](/section04/pb01.js)  |     ⭐      ||
|  2  | [뒤집은 소수](/section04/pb02.js)   |     ⭐      ||
|  3  | [멘토링](/section04/pb03.js)   |     ⭐      ||
|  4  | [졸업 선물](/section04/pb04.js)  |     ⭐      ||
|  5  |[K번째 큰 수](/section04/pb05.js)     |     ⭐      ||

- 소수구하기
```jsx
function isPrime(num){
  if(num===1) return false;
  for(let i=2; i<=parseInt(Math.sqrt(num)); i++){
    if(num%i===0) return false;
  }
  return true;
}
```

## Section 5 효율성(투포인터 알고리즘, 슬라이딩윈도우, 해쉬)

| No  | Title                           |  Difficulty  | Review |
|:---:|---------------------------------|:------------:|--------|
|  1  | [두 배열 합치기](/section05/pb01.js)  |      ⭐       ||
|  2  | [공통원소 구하기](section05/pb02.js)   |      ⭐       ||
|  3  | [연속 부분수열1](section05/pb03.js)   |      ⭐       ||
|  4  | [연속 부분수열2](/section05/pb04.js)  |     ⭐⭐⭐      ||
|  5  | [최대 매출](/section05/pb05.js)     |     ⭐      ||

### Two Pointers Algorithm
  - 이중 for문`O(n^2)`으로 해결할 수 있는 문제를 투포인터`O(n)`로 해결했을 때 시간복잡도 감소.


## javascript memo
### Set 객체를 배열로 만드는 방법
1. Array.from
```jsx
const set = new Set([1,2,3,4,5]);
const arr = Array.from(set);
```
2. 스프레드 연산자
```jsx
const set = new Set([1,2,3,4,5]);
const arr = [...set];
```

## 알고리즘 tip
- 익숙해지기
  - 긴 문제지문 읽고 요약해서 읽을 필요가 있음.
  - 시간 복잡도 계산
  - 엣지 케이스 계산
- 사용하는 언어 특징 파악
- 스스로 해보고 안되면 찾아본다.
- 보고 따라치기 X, 읽고 혼자 해봐야함.
- https://prgms.tistory.com/135?category=892800