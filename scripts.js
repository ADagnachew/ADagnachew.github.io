// Q#1
function max2(x, y) {
    if (x > y)
        returnx;
    else return y;
}

//Q#2
function max3(x, y, z) {
    if (max2(x, y) > z) {
        return max2(x, y);
    } else return z;

}

//Q#3
function vawel(c) {
    c.toUpperCase();
    if (c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U') {
        return true;
    } else return false;
}

//Q#4
function sum(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result = sum + array[i];
    }
    return result;
}

//Q#4
function multiply(array) {
    let result = 1;
    for (let i = 0; i < array.length; i++) {
        result = result * array[i];
    }
    return result;
}

//Q#5
function reverse(str) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr = newStr + str.charAt(i);
    }
    return newStr;
}

//Q#6
function longestWord(arrayOfWords) {
    let longest = arrayOfWords[0];
    for (let i = 1; i < arrayOfWords.length; i++) {
        if (longest < arrayOfWords[i].length)
            longest = arrayOfWords[i].length;
    }
    return longest;
}

//Q#7
function longwords(arrayOfWords, i) {
    let result = [];
    for (let j = 0; j < arrayOfWords.length; j++) {
        if (arrayOfWords[j].length > i)
            result.push(arrayOfWords[j]);
    }
    return result;
}
//Q#8a
function multiply10(arr) {
    return arr.map(x => x * 10);
}

//Q#8b
function element3(arr) {
    return arr.filter(a => a == 3);
}
//Q#8c
function product(arr) {
    return arr.reduce((acc, curr) => acc * cur);
}
