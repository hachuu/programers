/* 문제 : 문자열 내 마음대로 정렬하기

문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 [sun, bed, car]이고 n이 1이면 각 단어의 인덱스 1의 문자 u, e, a로 strings를 정렬합니다.

제한 조건
strings는 길이 1 이상, 50이하인 배열입니다.
strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
모든 strings의 원소의 길이는 n보다 큽니다.
인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.
입출력 예
strings n   return
[sun, bed, car] 1   [car, bed, sun]
[abce, abcd, cdx]   2   [abcd, abce, cdx]
입출력 예 설명
입출력 예 1
sun, bed, car의 1번째 인덱스 값은 각각 u, e, a 입니다. 이를 기준으로 strings를 정렬하면 [car, bed, sun] 입니다.

입출력 예 2
abce와 abcd, cdx의 2번째 인덱스 값은 c, c, x입니다. 따라서 정렬 후에는 cdx가 가장 뒤에 위치합니다. abce와 abcd는 사전순으로 정렬하면 abcd가 우선하므로, 답은 [abcd, abce, cdx] 입니다.

*/

// 내 풀이
function solution(strings, n) {
    const newArr = strings.map(x=>{
        return x.substring(n, n+1);
    });
    newArr.sort((a,b)=>(a<b)? -1: (a===b) ? 0 : 1);
    let returnArr = [];
    strings.sort((a,b)=>(a<b)? -1: (a===b) ? 0 : 1);
    newArr.forEach((x,i)=> {
        strings.forEach(y=> {
            if (y.substring(n, n+1) === x && (i === 0 || (i > 0 && x !== newArr[i-1]))) {
                returnArr.push(y);
            }
        })
    })
    return returnArr;
}

// 다른 사람 풀이 => sort a, b 값을 비교하여 n인덱스의 값이 같을 경우 배열 전체 값으로 sort를 한다.
function solution(strings, n) {
    // strings 배열
    // n 번째 문자열 비교
    return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}