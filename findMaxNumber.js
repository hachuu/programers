/* 문제
0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.

0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

제한 사항
numbers의 길이는 1 이상 100,000 이하입니다.
numbers의 원소는 0 이상 1,000 이하입니다.
정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.
*/

// 시도하다가 실패한 소스
function solution(numbers) {
    numbers = numbers.sort((a,b)=>a-b);
    numbers = numbers.map(String);
    var answer = '';
    for (let i=9; i>=0; i--) {
    let sameValues = [];
        numbers.map((x,j)=>{
            const eachValue = x;
            const firstNum = x.substr(0,1);
            if (firstNum.indexOf(i.toString()) > -1) {
                sameValues.push(eachValue);
            }
        })

        if (sameValues.length === 0) {
            continue;
        } else if (sameValues.length === 1) {
            answer += sameValues[0];
            numbers.splice(numbers.indexOf(sameValues[0]), 1);
        } else {
            const selectedNumber = findAvailableCheckedValue(sameValues);
            answer += selectedNumber;
            numbers.splice(numbers.indexOf(selectedNumber), 1);
            i = i+1;
        }
    }
    return answer;
}

function findAvailableCheckedValue(sameValues) {
    return sameValues.reduce(function(a, b) {

        if (a.length === 1) {
            return a;
        } else if (a.length < b.length) {
            return b;
        } else if (a.length === b.length) {

            return a > b ? a : b;
        } else {

            return b;
        }
        
    })
}

// 다른 사람 소스.. 충격적이다..

function solution(numbers) { numbers.sort((a, b) => (b.toString() + a.toString()) - (a.toString() + b.toString())); return numbers.join("") == 0 ? "0" : numbers.join(""); }