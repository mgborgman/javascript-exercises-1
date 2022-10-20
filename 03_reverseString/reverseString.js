const reverseString = function(str) {
    let stringLength = str.length - 1;
    var reversedString = '';
    //loop over string indecies starting from index length - 1
    // and counting down to zero and save what is in that spot to a new
    // variable reverseString and return it.
    for(stringLength; stringLength >= 0; stringLength--) {
        reversedString += str[stringLength];
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
