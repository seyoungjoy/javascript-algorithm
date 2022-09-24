# Javascript algorithm
## 완전 탐색(블루투포스)
- [자리수의 합](/section04/pb01.js)
- [뒤집은 소수](/section04/pb02.js)
- [멘토링](/section04/pb03.js)
- [졸업 선물](/section04/pb04.js)
  - 완전 탐색은 모든 경우의 수를 생각해야 한다는거.
  - 특정 숫자를 기준으로 최댓값을 뽑아내야할때
  - sort로 줄지어서 앞에서부터 break 조건에 다다를때까지 마이너스.
- [K번째 큰 수](/section04/pb05.js)


## javascript
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