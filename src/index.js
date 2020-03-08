module.exports = function check(str, bracketsConfig) {
    if  (str.length % 2 == 1) {
        return false;
    }

    let brackets = strIntoArr(bracketsConfig);
    let len = lengthStr(str, brackets);
    return checkBool(len);
};

function strIntoArr(bracketsConfig) {
    let newBrackets = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        newBrackets.push(bracketsConfig[i][0] + bracketsConfig[i][1])
    }
    return newBrackets;
}

function lengthStr(str, newBrackets) {
    let len = str.length;
    for (let i = 0; i < len; i++) {
        for (let t = 0; t < newBrackets.length; t++) {
            str = str.replace(newBrackets[t], '')
        }
    }
    return str.length;
}

function checkBool(number) {
    if (number / 2 == 0) {
        return true;
    }
    return false;
}
