const jin = {
  name: "Jinhyo",
  age: 34,
  gender: "male",
};

const people = [
  {
    id: 0,
    name: "Jinhyo",
    age: 34,
    gender: "male",
  },
  {
    id: 1,
    name: "ryo",
    age: 24,
    gender: "male",
  },
  {
    id: 2,
    name: "Jane",
    age: 27,
    gender: "female",
  },
];

function getPersonById(id) {
  return people.find((person) => person.id === id);
}

module.exports = { jin, people, getPersonById };
