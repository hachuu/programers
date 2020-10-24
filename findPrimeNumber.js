// 문제
// 한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

// 각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// numbers는 길이 1 이상 7 이하인 문자열입니다.
// numbers는 0~9까지 숫자만으로 이루어져 있습니다.
// 013은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.
// 입출력 예
// numbers	return
// 17	3
// 011	2
// 입출력 예 설명
// 예제 #1
// [1, 7]으로는 소수 [7, 17, 71]를 만들 수 있습니다.

// 예제 #2
// [0, 1, 1]으로는 소수 [11, 101]를 만들 수 있습니다.

// 11과 011은 같은 숫자로 취급합니다.

function solution(numbers) {

	makeArray = [...numbers]; // ["1", "7"];
	const makeNewNumbers = makeNewNumber(makeArray);
	return makeNewNumbers.filter(v=> isPrime(v).length);
	console.log('makeNewNumbers , ', makeNewNumbers);
}

function makeNewNumber(firstArray) {
	let newArray = [];

	function recursion(numString, firstArray) {
		const length = firstArray.length;
		if (length === 0) return;
		for (let i = 0; i<length; i++) {
			const addString = firstArray.shift();
			const newNum = numString + addString;
			const num = Number(newNum);
			newArray.push(num);
			recursion(newNum, firstArray);
			firstArray.push(addString);
		}
	}
	recursion('', firstArray);
	return Array.from(new Set(newArray));

}

function isPrime(num) {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if(num % i === 0) return false;
  }
  return num > 1;
}

// * shift() 메서드는 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환합니다. 이 메서드는 배열의 길이를 변하게 합니다.
const array1 = [1, 2, 3];
const firstElement = array1.shift();
console.log(array1);
// expected output: Array [2, 3]
console.log(firstElement);
// expected output: 1

