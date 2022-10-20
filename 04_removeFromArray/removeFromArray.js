const removeFromArray = function(arr, ...nums) {
    for(const num of nums) {
        for(const item of arr) {
            if(item === num) {
                const index = arr.indexOf(item);
                if(index > -1) {
                    arr.splice(index, 1);
                }
            }
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
