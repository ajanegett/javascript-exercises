const findTheOldest = function (people) {
  people.sort((person1, person2) => {
    if (person1.yearOfDeath === undefined) {
      const d = new Date();
      let year = d.getFullYear();
      person1.yearOfDeath = year;
    }
    if (person2.yearOfDeath === undefined) {
        const d = new Date();
        let year = d.getFullYear();
        person2.yearOfDeath = year;
      }  
    let age1 = person1.yearOfDeath - person1.yearOfBirth;
    let age2 = person2.yearOfDeath - person2.yearOfBirth;
    return age2 - age1;
  });
  return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
