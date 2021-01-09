function checkLength(word) {
    if (word.length >= 10) {
        console.log('Это слово слишком длинное!');
    } else if (word.length < 10) {
        console.log('Это слово подходит!');
    }
}
checkLength('Джомолунгма');
checkLength('Анапурна');



function concatTwoStrings(string1, string2) {
    let result = string1 + string2;
    let maxLength = 20;

    if (result.length > maxLength) {
        return `${result.substring(0, 20)}...`;
    } else if (result.length <= maxLength) {
        return result;
    }
}
console.log(concatTwoStrings('Мы учимся программировать', 'на JavaScript!'));
console.log(concatTwoStrings('Мы учимся', ' JS!'));