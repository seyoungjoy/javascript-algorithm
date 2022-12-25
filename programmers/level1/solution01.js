// 스택큐 > 같은 숫자는 싫어

function solution(arr) {
    let answer = [];
    const length = arr.length;

    for(let i=0; i<length; i++){
        if(arr[i] !== arr[i+1]){
            answer.push(arr[i]);
        }
    }
    return answer;
}

function solution(arr) {
    return arr.filter((item,index)=> item !== arr[index+1]);
}

solution( [1,1,3,3,0,1,1]);