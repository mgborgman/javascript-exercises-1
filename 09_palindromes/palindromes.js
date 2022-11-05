const palindromes = function (string) {
    let lowerCaseString = string.toLowerCase();
    let punctuationless = lowerCaseString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let whitespaceless = punctuationless.replace(/ /g,'');
    let finalString = whitespaceless.replace(/\s{2,}/g," ");
    let index = finalString.length - 1;
    let reversedString = '';

    for (index; index >= 0; index--) {
        reversedString += finalString[index];
    }

    if (reversedString == finalString) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
