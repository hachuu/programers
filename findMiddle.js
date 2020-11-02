/* 문제 : 가운데 글자 가져오기

문제 설명
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

재한사항
s는 길이가 1 이상, 100이하인 스트링입니다.
입출력 예
s	return
abcde	c
qwer	we

*/
function solution(s) {
    let isEven = s.length%2 === 0 ? true : false;
    const index = isEven ? parseInt(s.length/2)-1 : parseInt(s.length/2);
    return isEven ? s.slice(index, index+2) : s.slice(index, index+1);
}

// 다른 사람 풀이
function solution(s) {
    const mid = Math.floor(s.length/2);
    return s.length %2 === 1 ? s[mid] : s[mid-1]+s[mid];
}