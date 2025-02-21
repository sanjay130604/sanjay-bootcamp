// Sample array of user objects
const users = [
    { name: "jagan", age: 30 },
    { name: "aniruth", age: 22 },
    { name: "sanjay", age: 27 },
    { name: "vijay", age: 19 },
    { name: "dhoni", age: 35 }
];

function filterUsersByAge(users, minAge) {
    return users.filter(user => user.age > minAge);
}

const filteredUsers = filterUsersByAge(users, 25);

console.log("Users older than 25:", filteredUsers);
