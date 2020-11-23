/* 문제 : 핸드폰 번호 가리기

프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

제한 조건
s는 길이 4 이상, 20이하인 문자열입니다.
입출력 예
phone_number	return
01033334444	*******4444
027778888	*****8888

*/
function solution(phone_number) {
    const arr = new Array(phone_number.length-4).fill('*');
    const lastNum = phone_number.substring(phone_number.length-4, phone_number.length);
    return arr.join('').concat(lastNum);
}

// 내 소스 다듬기
function solution(phone_number) {
    const arr = new Array(phone_number.length-4).fill('*');
    return arr.join('').concat(phone_number.slice(-4));
}

// 내 소스 다듬기 2 => fill하지 않고 바로 join'*'으로 해결해도 됨
function hide_numbers(s){
  var result = Array(s.length-3).join("*") 
  var cut = s.substring(s.length-4) 

  return result+cut;
}


// 다른 사람 풀이 : 정규식의 필요성
// 보통 개발할 때 이렇게 많이 하는데.... 왜 기억을 못했을까
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}

// 다른 사람의 풀이 : repeat이라는게 있구나... 또 새로운걸 알게 되었다.
// repeat과 slice의 조화라니
function hide_numbers(s){
  var result = "*".repeat(s.length - 4) + s.slice(-4);
  return result;
}