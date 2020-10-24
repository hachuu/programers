/*
	문제: 두 개 뽑아서 더하기
문제 설명
정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

제한사항
numbers의 길이는 2 이상 100 이하입니다.
numbers의 모든 수는 0 이상 100 이하입니다.

입출력 예
numbers	result
[2,1,3,4,1]	[2,3,4,5,6,7]
[5,0,2,7]	[2,5,7,9,12]


입출력 예 설명
입출력 예 #1

2 = 1 + 1 입니다. (1이 numbers에 두 개 있습니다.)
3 = 2 + 1 입니다.
4 = 1 + 3 입니다.
5 = 1 + 4 = 2 + 3 입니다.
6 = 2 + 4 입니다.
7 = 3 + 4 입니다.
따라서 [2,3,4,5,6,7] 을 return 해야 합니다.
입출력 예 #2

2 = 0 + 2 입니다.
5 = 5 + 0 입니다.
7 = 0 + 7 = 5 + 2 입니다.
9 = 2 + 7 입니다.
12 = 5 + 7 입니다.
따라서 [2,5,7,9,12] 를 return 해야 합니다.

*/

// 나의 풀이
function solution(numbers) {
    let returnArr = [];
    for (let i =0; i<numbers.length; i++) {
        for (let j =0; j<numbers.length; j++) {
            if (j!==i) {
                returnArr.push(numbers[i]+numbers[j])
            }
        }	
    }
    returnArr = [...new Set(returnArr)]
    return returnArr.sort((a,b)=>a-b);
}

// 다른 사람의 풀이 => 다들 이중 for문으로 푸는 건 거의 같은데(획기적인 것을 기대했으나 발견을 못했다...) 
// [...new Set(arr)] 를 다르게 표현한 신박한 것이 있어서 가져왔다.
// return 하는 배열에 push하기 전에 먼저 배열에 그 값이 include되어 있는지 확인을 하거나
// indexOf로 비교하거나 하는 방법이 있었다.

function solution(numbers) {
    let answer = [];
    for(let i = 0; i < numbers.length; i++) {
        for(let j = 0; j < numbers.length; j++) {
            if(i === j) continue;
            if(!answer.includes(numbers[i]+numbers[j])) { // or if (answer.indexOf(sum) === -1) {
                answer.push(numbers[i]+numbers[j])
            }
        }
    }
    answer.sort((a,b) => a-b)
    return answer;
}
