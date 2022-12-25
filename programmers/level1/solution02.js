// 해시 > 완주하지 못한 선수
// Map
// 키와 값이 있는 것을 보면 object랑 유사한데, 키에 다양한 자료형을 허용한다는 점에서 다르다.

function solution(pt, cp) {
    let answer = [];

    let map = new Map();
    for(let x of pt){
        if(map.has(x)) map.set(x, map.get(x)+1)
        else map.set(x,1)
    }
    // { 'mislav' => 2, 'stanko' => 1, 'ana' => 1 }

    for(let x of cp){
        if(map.has(x)) map.set(x,map.get(x)-1)
    }

    for(let [key,val] of map){
        if(val === 1) return key;
    }

    return answer;
}

const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = ["stanko", "ana", "mislav"];
console.log(solution(participant, completion));