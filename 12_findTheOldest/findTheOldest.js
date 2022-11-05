const findTheOldest = function(people) {
    let oldestPerson;
    let oldestAge = 0;
    let age = 0;
    
    for(const person of people) {
        if(!person.yearOfDeath) {
            person.yearOfDeath = new Date().getFullYear();
        }
        
        age = person.yearOfDeath - person.yearOfBirth;
        
        if(age > oldestAge) {
            oldestAge = age;
            oldestPerson = person;
        }
    }

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
