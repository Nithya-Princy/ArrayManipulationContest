// Define the data array
const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  data.forEach(person => {
    if (person.profession.toLowerCase() === "developer") {
      console.log(person);
    }
  });
}

// 2. Add Data
function addData() {
  const name = prompt("Enter name:");
  const age = prompt("Enter age:");
  const profession = prompt("Enter profession:");

  const newData = { name, age: parseInt(age), profession };
  data.push(newData);
}

// 3. Remove Admins
function removeAdmin() {
  const filteredData = data.filter(person => person.profession.toLowerCase() !== "admin");
  console.log(filteredData);
}

// 4. Concatenate Array
function concatenateArray() {
  const dummyArray = [
    { name: "bob", age: 30, profession: "developer" },
    { name: "alice", age: 25, profession: "admin" },
  ];

  const result = [...data, ...dummyArray];
  console.log(result);
}

// 5. Average Age
function averageAge() {
  const totalAge = data.reduce((sum, person) => sum + person.age, 0);
  const average = totalAge / data.length;
  console.log("Average Age:", average);
}

// 6. Age Check
function checkAgeAbove25() {
  const above25 = data.some(person => person.age > 25);
  console.log("Is there anyone above 25?", above25);
}

// 7. Unique Professions
function uniqueProfessions() {
  const professions = [...new Set(data.map(person => person.profession))];
  console.log(professions);
}

// 8. Sort by Age
function sortByAge() {
  const sortedData = data.slice().sort((a, b) => a.age - b.age);
  console.log(sortedData);
}

// 9. Update Profession
function updateJohnsProfession() {
  const updatedData = data.map(person => {
    if (person.name.toLowerCase() === "john") {
      person.profession = "manager";
    }
    return person;
  });
  console.log(updatedData);
}

// 10. Profession Count
function getTotalProfessions() {
  const developerCount = data.filter(person => person.profession.toLowerCase() === "developer").length;
  const adminCount = data.filter(person => person.profession.toLowerCase() === "admin").length;

  console.log("Total Developers:", developerCount);
  console.log("Total Admins:", adminCount);
}
