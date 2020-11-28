/* 문제 : 큰 수 만들기

어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.

예를 들어, 숫자 1924에서 수 두 개를 제거하면 [19, 12, 14, 92, 94, 24] 를 만들 수 있습니다. 이 중 가장 큰 숫자는 94 입니다.

문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다. number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.

제한 조건
number는 1자리 이상, 1,000,000자리 이하인 숫자입니다.
k는 1 이상 number의 자릿수 미만인 자연수입니다.
입출력 예
number  k   return
1924    2   94
1231234 3   3234
4177252841  4   775841

*/

// 내가 푼 문제
// 문제 이해를 잘 못했다..
function solution(number, k) {
    
    const arr = number.split('');
    const newData = arr.sort((a,b)=>b-a).join('');
    return newData.substr(0, newData.length-k);
}


// 다른 사람 풀이
// javascript stack 의 로직을 확인 해봐야겠다..
// 레벨 2올렸다고 금방 쫄아버리다니..
function solution(number, k) {
    var stack = []; // b : 최종 글자들이 저장될 스택 (숫자가 큰!)
    for (var i = 0; i < number.length; i++) { // 모든 숫자 비교
        var now = number[i]; // 현재 인덱스 숫자. 처음에는 그냥 push
        
        // 무조건 push 하고 다음 for 문에서 이전인덱스 숫자와 나랑 비교해서 현재인덱스가 이전인덱스보다 크면 pop하고 넣어줌. 제거하는 숫자인 (k)를 1 감소
        // 제거할 숫자를 다 채웠으면 그냥 넣음
        while (k > 0 && stack[stack.length - 1] < now) {
            stack.pop();
            k--;
        }
        stack.push(now);
    }
    // k가 0일 경우 스택은 그대로,
    // but k가 남아있으면 뒤에서부터 제거해준다. (ex. 1010,2 -> 11)
    stack.splice(stack.length - k, k);
    var answer = stack.join('');
    
    return answer;
}

// 다른 사람 풀이 2
function solution(number, k) {
    var b = [];
    for (var i = 0; i < number.length; i++) {
        var c = number[i];
        while (k > 0 && b.length > 0 && b[b.length - 1] < c) {
            b.pop();
            k--;
        }
        b.push(c);
    }
    b.splice(b.length - k, k);
    var answer = b.join('');
    return answer;
}
