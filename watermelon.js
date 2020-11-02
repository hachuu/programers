/* 문제 : 수박수박수박수박수박수?

문제 설명
길이가 n이고, 수박수박수박수....와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 수박수박을 리턴하고 3이라면 수박수를 리턴하면 됩니다.

제한 조건
n은 길이 10,000이하인 자연수입니다.
입출력 예
n	return
3	수박수
4	수박수박

*/

function solution(n) {
    var answer = '';
    let mok = parseInt(n/2);
    let remain = n%2;
    for (let i=0; i<mok; ++i) {
        answer += '수박'
    }
    return remain === 1 ? answer + '수' : answer;
}

// repeat을 이용하여 더 간단하게 풀어보자
function solution(n) {
    return '수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');
}