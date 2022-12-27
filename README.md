# Javascript algorithm
## programmers
### level 1
- [같은 숫자는 싫어(스택/큐)](programmers/level1/solution01.js)
- [완주하지 못한 선수(해시)](programmers/level1/solution02.js)

### level 2
- [기능개발(스택/큐)](programmers/level2/solution03.js)
- [가장 큰 수(정렬)](programmers/level2/solution04.js)
- [h-index(정렬)](programmers/level2/solution05.js)

## js algorithm
### section 4 완전 탐색(블루투포스) 
- [자리수의 합](/js-algorithm/section04/pb01.js)
- [뒤집은 소수](/js-algorithm/section04/pb02.js)
- [멘토링](/js-algorithm/section04/pb03.js)    
- [졸업 선물](/js-algorithm/section04/pb04.js)  
- [K번째 큰 수](/js-algorithm/section04/pb05.js)

###  Section 5 효율성(투포인터 알고리즘, 슬라이딩윈도우, 해쉬)
- [두 배열 합치기(TP)](/js-algorithm/section05/pb01.js)         
- [공통원소 구하기(TP)](js-algorithm/section05/pb02.js)          
- [연속 부분수열1(TP)](js-algorithm/section05/pb03.js)          
- [연속 부분수열2(TP)](/js-algorithm/section05/pb04.js)         
- [최대 매출(Sliding Window)](/js-algorithm/section05/pb05.js)
- [학급 회장(Hash Map)](/js-algorithm/section05/pb06.js)      
- [아나그램(Hash Map)](/js-algorithm/section05/pb07.js)       
- [모든 아나그램(Hash&SW&TP)](/js-algorithm/section05/pb08.js)

### Section 6 자료구조(스택, 큐)
- [올바른 괄호(스택](/js-algorithm/section06/pb01.js)     
- [괄호 문자 제거(스택)](js-algorithm/section06/pb02.js)   
- [크레인 인형뽑기(카카오기출)](js-algorithm/section06/pb03.js)
- [후위식 연산(postfix)](js-algorithm/section06/pb04.js)
- [쇠막대기(스택)](js-algorithm/section06/pb05.js)       
- [공주구하기(큐)](js-algorithm/section06/pb06.js)       
- [교육과정설계(큐)](js-algorithm/section06/pb07.js)

### Section 7 정렬과 그리디, 결정알고리즘(이분검색)
- [선택정렬](/js-algorithm/section07/pb01.js)               
- [버븝정렬](js-algorithm/section07/pb02.js)                
- [Special Sort(버블정렬응용)](js-algorithm/section07/pb03.js)
- [삽입정렬](js-algorithm/section07/pb04.js)


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

### 소수구하기
```jsx
function isPrime(num){
  if(num===1) return false;
  for(let i=2; i<=parseInt(Math.sqrt(num)); i++){
    if(num%i===0) return false;
  }
  return true;
}
```

### Map
- 기존 객체와 달리 이터러블 형태의 객체
- 중복 키 불가능
```jsx
// 요소 추가 : set
const lee = {name: 'Lee'};
const kim = {name : 'kim'};
const map = new Map();
map.set('key1', 'value1'); // Map(1)["key1" => "value1"]

// 요소 취득 : get
const map = new Map([[lee,'developer'], [kim, 'designer']]);
map.get(lee); //developer

// 요소 존재 확인 : has
const map = new Map([[lee,'developer'], [kim, 'designer']]);
map.has(lee); //true

```
- 이터러블 메서드 사용 가능(forEach, for...of)
  - 스프레드 문법, 배열 디스트럭처링 할당 가능
- 이터레이터인 객체를 반환하는 메서드 제공
  - `Map.prototype.keys` : 요소키 반환
  - `Map.prototype.values` : 요소값 반환
  - `Map.prototype.entries` : 요소키, 요소값 반환

### 객체 복사
- **얕은 복사(Shallow copy)**
- 원시 값은 값 자체를 복사할 수 있지만 객체를 복사할 땐 참조값을 복사하게 된다.
- 얕은 복사를한 객체는 참조값 주소가 같기 때문에 하나의 객체 값을 변경하면 나머지도 변수의 값도 변경된다.
```jsx
// 원시값 복사
let a="hi";
let b=a;
console.log(b); //hi

// 참조값 복사
let c={ name:"young"};
let d=c;
// d의 name 프로퍼티 이름을 바꿔버리면 c의 name도 함께 바뀐다.
// 왜냐? 둘은 같은 객체를 참조하고 있기 때문이다.
d.name="seyoung";
console.log(c.name); //seyoung
```

- **깊은 복사(Deep copy)**
- 참조값을 복사하는게 아닌 값 자체를 복사하려면 깊은 복사를 수행해야한다.
- 참조값이 아닌 객체의 프로퍼티 키, 값 자체를 복사
```jsx
// (1) assign
let a = { age : 20};
let b = Object.assign({}, a);

// (2) spread 연산자
let a = { age : 20};
let b = {...a};

```
- 

## tip
- 익숙해지기
  - 긴 문제지문 읽고 요약해서 읽을 필요가 있음.
  - 시간 복잡도 계산
  - 엣지 케이스 계산
- 사용하는 언어 특징 파악
- 스스로 해보고 안되면 찾아본다.
- 보고 따라치기 X, 읽고 혼자 해봐야함.
- https://prgms.tistory.com/135?category=892800
