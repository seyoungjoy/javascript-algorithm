// 5*5 격자
// 같은 번호가 쌓이면 두개다 사라짐
// 2차원 배열에서 moves 위치 변수가 움직였을 때 사라진 인형의 개수 구하기
// 2차원 배열 탐색 + 스택
function solution(board, moves){
    let answer=0;
    let stack = [];
    let temp=0;
    // moves 위치 변수 수만큼 1차 반복문
    for(let i=0; i<moves.length; i++){
        for(let j=0; j<board.length; j++){
            // 원하는 column 뽑기
            if(board[j][moves[i]-1] !== 0){
                temp = board[j][moves[i]-1];
                board[j][moves[i]-1] = 0;
                if(temp === stack[stack.length-1]){
                    stack.pop();
                    answer += 2;
                } else{
                    stack.push(temp);
                }
                break;
            }
        }
    }
    return answer;
}

let a=[[0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]];

let b=[1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));