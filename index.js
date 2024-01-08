// 1

function pickPropArray(array, property) {
    let otv = [];
    for (let i = 0; i < array.length; i++) {
        let el = array[i];
        if (el.hasOwnProperty(property)) {
            otv.push(el[property]);
        }
    }
    return otv;
}

const students = [
    { name: 'Павел', age: 20 },
    { name: 'Иван', age: 20 },
    { name: 'Эдем', age: 20 },
    { name: 'Денис', age: 20 },
    { name: 'Виктория', age: 20 },
    { age: 40 },
];

const result = pickPropArray(students, 'name');

console.log('Задание 1:');
console.log(result);


// 2

function createCounter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    }
}

console.log('Задание 2:');

const counter1 = createCounter();
counter1(); // 1
counter1(); // 2

const counter2 = createCounter();
counter2(); // 1
counter2(); // 2


// 3

function spinWords(str) {
    const words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i].length >= 5) {
            words[i] = words[i].split('').reverse().join('');
        }
    }
    return words.join(' ');
}

console.log('Задание 3:');

const result1 = spinWords("Привет от Legacy");
console.log(result1); // тевирП от ycageL

const result2 = spinWords("This is a test");
console.log(result2); // This is a test


// 4

function searchSumTarget(nums, target) {
    let otv = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                otv.push(i, j);
                return otv;
            }
        }
    }
    return otv;
}

console.log('Задание 4:')

const nums = [2, 7, 11, 15];
const target = 9;

const result4 = searchSumTarget(nums, target);
console.log(result4); // [0,1]

// 5

function findPrefix(array) {
    if (array.length === 0) {
        return "";
    }

    if (array.length === 1) {
        return array[0];
    }

    let shortString = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i].length < shortString.length) {
            shortString = array[i];
        }
    }

    const shortStringLen = shortString.length;
    for (let i = shortStringLen; i >= 2; i--) {
        for (let j = 0; j <= shortStringLen - i; j++) {
            let prefix = shortString.substring(j, j + i);
            let check = true;
            for (let k = 0; k < array.length; k++) {
                if (array[k].indexOf(prefix) === -1) {
                    check = false;
                    break;
                }
            }
            if (check) {
                return prefix;
            }
        }
    }
    return "";
}

console.log('Задание 5');

const strs1 = ["цветок", "поток", "хлопок"];
const result51 = findPrefix(strs1);
console.log(result51); // "ок"

const strs2 = ["собака", "гоночная машина", "машина"];
const result52 = findPrefix(strs2);
console.log(result52); // ""