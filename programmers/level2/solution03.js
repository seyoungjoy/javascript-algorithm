// 스택/큐 > 기능개발
// 100%시 서비스 반영 가능
// 뒤에 있는 기능은 먼저 개발은 가능하나 앞 기능과 함께 배포 가능.

function solution(progresses, speeds) {
    let answer = [];
    const days = progresses.map((progress, index)=> Math.ceil((100-progress)/speeds[index]));
    // [ 7, 3, 9 ]
    let count = 1;
    let maxDay = days[0];

    for(let i=1; i<days.length; i++){
        if(maxDay >= days[i]){
            count++;
        } else {
            maxDay = days[i];
            answer.push(count);
            count = 1;
        }
    }
    answer.push(count);
    return answer;
}

// const progress = [93, 30, 55];
// const speed = [1, 30, 5];

const progress = [95, 90, 99, 99, 80, 99];
const speed = [1, 1, 1, 1, 1, 1];

console.log(solution(progress, speed));

function solution1(progresses, speeds) {
    let answer = [];
    let count = 0;
    let prevDay = Number.MAX_SAFE_INTEGER;
    let currentDay = 0;

    for(let i=0; i<progresses.length; i++){
        currentDay = Math.ceil((100-progresses[i])/speeds[i])
        if(prevDay >= currentDay){
            count += 1;
            prevDay = currentDay;
        } else {
            answer.push(count);
            count = 1;
        }
    }
    answer.push(count);

    return answer;
}

// 기능들이 개발되는 날짜를 구해서