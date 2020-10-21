/*
    <문제>
    수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

    1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
    2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
    3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

    1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

    제한 조건
    시험은 최대 10,000 문제로 구성되어있습니다.
    문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
    가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
    입출력 예
    answers return
    [1,2,3,4,5] [1]
    [1,3,2,4,2] [1,2,3]
    입출력 예 설명

    입출력 예 #1

        answers return
    [1,2,3,4,5] [1]
    [1,3,2,4,2] [1,2,3]

    수포자 1은 모든 문제를 맞혔습니다.
    수포자 2는 모든 문제를 틀렸습니다.
    수포자 3은 모든 문제를 틀렸습니다.
    따라서 가장 문제를 많이 맞힌 사람은 수포자 1입니다.

    입출력 예 #2

    모든 사람이 2문제씩을 맞췄습니다.
*/


// 내 풀이
function solution(answers) {
    const student1 = [1,2,3,4,5];
    let correct1 = 0;
    const student2 = [2,1,2,3,2,4,2,5];
    let correct2 = 0;
    const student3 = [3,3,1,1,2,2,4,4,5,5];
    let correct3 = 0;
    
    answers.forEach((x, i) => {
        if (x === student1[i%5]) {
            correct1++;
        }
        if (x === student2[i%8]) {
            correct2++;
        }
        if (x === student3[i%10]) {
            correct3++;
        }       
    });
        
    let correctArray = [correct1, correct2, correct3];
    correctArray = correctArray.sort((a,b) => b-a);
    console.log(correctArray);
    
    let newAnser = [];
    if ([...new Set(correctArray)].length === 1) {
        return [1,2,3];
    } else if ([...new Set(correctArray)].length === 2) {
        if (correctArray[0] === correct1) {
            newAnser.push(1);
        }
        if (correctArray[0] === correct2) {
            newAnser.push(2);
        }
        if (correctArray[0] === correct3) {
            newAnser.push(3);
        }
    } else {
        // 중복값 x
        if (correctArray[0] === correct1) {
            return [1];
        } else if (correctArray[0] === correct2) {
            return [2];
        } else if (correctArray[0] === correct3){
            return [3];
        }
    }

    return newAnser;
}


// 띵~했던 결과
/*
    answers에 대응하는 각 학생의 정답을 filter하여 length로 체크
    가장 큰 length가 max값
*/
function solution(answers) {
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
    var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
    var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
    var max = Math.max(a1c,a2c,a3c);

    if (a1c === max) {answer.push(1)};
    if (a2c === max) {answer.push(2)};
    if (a3c === max) {answer.push(3)};


    return answer;
}