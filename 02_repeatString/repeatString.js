const repeatString = function(str, num) {
    let result = '';

    if(num < 0) {
        return "ERROR";
    } else {
        for(num; num > 0; num--) {
            result += str;
        }
    
        return result;
    }

};

// Do not edit below this line
module.exports = repeatString;

