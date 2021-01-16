/*	문제: 짝지어 제거하기

문제 설명
짝지어 제거하기는, 알파벳 소문자로 이루어진 문자열을 가지고 시작합니다. 먼저 문자열에서 같은 알파벳이 2개 붙어 있는 짝을 찾습니다. 그다음, 그 둘을 제거한 뒤, 앞뒤로 문자열을 이어 붙입니다. 이 과정을 반복해서 문자열을 모두 제거한다면 짝지어 제거하기가 종료됩니다. 문자열 S가 주어졌을 때, 짝지어 제거하기를 성공적으로 수행할 수 있는지 반환하는 함수를 완성해 주세요. 성공적으로 수행할 수 있으면 1을, 아닐 경우 0을 리턴해주면 됩니다.

예를 들어, 문자열 S = baabaa 라면

b aa baa → bb aa → aa →

의 순서로 문자열을 모두 제거할 수 있으므로 1을 반환합니다.

제한사항
문자열의 길이 : 1,000,000이하의 자연수
문자열은 모두 소문자로 이루어져 있습니다.
입출력 예
s	result
baabaa	1
cdcd	0
입출력 예 설명
입출력 예 #1
위의 예시와 같습니다.
입출력 예 #2
문자열이 남아있지만 짝지어 제거할 수 있는 문자열이 더 이상 존재하지 않기 때문에 0을 반환합니다.

*/

// 내가 푼 문제..
// 재귀로 풀어보려고 했는데 어떻게 꼬인건지 모르겠다.. push pop으로 다시 손을 봐야겠다
function solution(s)
{
    function spliceArr(arr) {
        let returnVal;
        const firstL = arr.length;
        let cnt = 0;
        for (let i=0; i<arr.length; i++) {
            const x = arr[i];
            if (i!==arr.length-1 && x===arr[i+1]) {
                arr.splice(i, 2);
                cnt++;
            }
        }
        
        if (firstL === arr.length || cnt === 0) {
            returnVal = 0;
            return returnVal;
        } else if (arr.length === 0) {
            returnVal = 1;
            return returnVal;
        } else {
            spliceArr(arr);
        }
    }
    const arr = s.split('');
    let answer = spliceArr(arr);
    return answer;
}

// 다시 푼 문제: 스택개념으로 문제에 접근하면 간단하게 풀 수 있다.
function solution(s) {
	const arr = s.split('');
	const stack = [];
	for (let i=0; i<arr.length; i++) {
        const x = arr[i];
        if (stack.length === 0 || stack[stack.length - 1] !== x) {
            stack.push(x);
        } else {
        	stack.pop();
        }
    }
    return stack.length === 0 ? 1 : 0;
}

// 다른 사람이 푼 문제
const solution = (s) => {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0 || stack[stack.length - 1] !== s[i]) {
      stack.push(s[i]);
    } else {
      stack.pop();
    }
  }

  if (stack.length === 0) {
    return 1;
  }
  return 0;
};

//https://kyun2da.github.io/2020/06/28/removeInPairs/
