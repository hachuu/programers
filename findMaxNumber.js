function solution(numbers) {
    numbers = numbers.sort((a,b)=>a-b);
    numbers = numbers.map(String);
    var answer = '';
    for (let i=9; i>=0; i--) {
        numbers.map((x,j)=>{
            const eachValue = x;
            const firstValue = eachValue.substr(0,1);
            if (eachValue.indexOf(i.toString()) > -1) {
                answer += eachValue;
                numbers.splice(numbers.indexOf(eachValue), 1);
                j = j-1;
            }
        })
    }
    return answer;
}

function solution(numbers) {
    numbers = numbers.sort((a,b)=>a-b);
    numbers = numbers.map(String);
    var answer = '';
    for (let i=9; i>=0; i--) {
    let sameValues = [];
        numbers.map((x,j)=>{
            const eachValue = x;
            
            if (eachValue.indexOf(i.toString()) > -1) {
                sameValues.push(eachValue);
            }
        })

        if (sameValues.length === 0) {
            continue;
        } else if (sameValues.length === 1) {
            console.log('length가 1이면 그냥 넣어줌 :', sameValues);
            answer += sameValues[0];
            numbers.splice(numbers.indexOf(sameValues[0]), 1);
            console.log('answer : ',answer);
        } else {
            console.log('여러개면 비교를 해야지 :', sameValues);
            const selectedNumber = findAvailableCheckedValue(sameValues);
            answer += selectedNumber;
            numbers.splice(numbers.indexOf(selectedNumber), 1);
            console.log('answer : ',answer);
            sameValues.some(x=>{
                console.log('동일한 값 :',x);
                if (x.substr(0,1) === i.toString()) {
                    console.log('첫번째 숫자의 값이 i와 같다면 요기와야해 : ',x);
                    i = i+1;
                    return true;
                }
            })
            console.log(i);
        }
    }
    return answer;
}

function findAvailableCheckedValue(sameValues) {
    return sameValues.reduce(function(a, b) {

        if (a.length === 1) {
            return a;
        } else if (a.length < b.length) {
            if (a.length > 1 && b.length > 1 && a.substr(0,2) > b.substr(0,2)) {
                return a;
            } else {
                return b;
            }
        } else if (a.length === b.length) {

            return a > b ? a : b;
        } else {

            return b;
        }
        
    })
}


function solution(numbers) {
    numbers = numbers.sort((a,b)=>a-b);
    numbers = numbers.map(String);
    var answer = '';
    for (let i=9; i>=0; i--) {
    let sameValues = [];
        numbers.map((x,j)=>{
            const eachValue = x;
            
            if (eachValue.indexOf(i.toString()) > -1) {
                sameValues.push(eachValue);
            }
        })

        if (sameValues.length === 0) {
            continue;
        } else if (sameValues.length === 1) {
            //console.log('length가 1이면 그냥 넣어줌 :', sameValues);
            answer += sameValues[0];
            numbers.splice(numbers.indexOf(sameValues[0]), 1);
            //console.log('answer : ',answer);
        } else {
            //console.log('여러개면 비교를 해야지 :', sameValues);
            const selectedNumber = findAvailableCheckedValue(sameValues);
            answer += selectedNumber;
            numbers.splice(numbers.indexOf(selectedNumber), 1);
            //console.log('answer : ',answer);
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
            if (a.length > 1 && b.length > 1 && a.substr(0,2) > b.substr(0,2)) {
                return a;
            } else {
                return b;
            }
        } else if (a.length === b.length) {

            return a > b ? a : b;
        } else {

            return b;
        }
        
    })
}