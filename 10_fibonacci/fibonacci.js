const fibonacci = function(fibAt) {
    let fibSeq = [0, 1];

    if(fibAt < 0) {
        return "OOPS"
    } else {
        for(let index = 1; index <= fibAt; index++) {
            fibSeq.push(fibSeq[index - 1] + fibSeq[index]); 
        }
    }
    
    return fibSeq[fibAt];
};

// Do not edit below this line
module.exports = fibonacci;
