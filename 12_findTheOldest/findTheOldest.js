//start with adding current year as "death" if person not dead
const getAge = function(born, died) {
    if(!died) {
        died = new Date().getFullYear();
    }
    return died - born;
};

const findTheOldest = function(array) { 
    //array.reduce() method to compare current age with previous age
      return array.reduce((oldest, currentPerson) => {
        //oldestAge gets the age of the oldest person
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        //currentAge gets the age of the current person
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        //return name of person with oldest age
        return oldestAge < currentAge ? currentPerson : oldest;
      });
    };

// Do not edit below this line
module.exports = findTheOldest;
