const fs = require("fs");

let users = require("../../data/users.json");

export const Users = {
  getAll: () => users,
  getById: (id) => users.find((u) => u.id.toString() === id.toString()),
  getByEmail: (email) => users.find((u) => u.email === email),
  create,
};

function create(user) {
  // generate new user id
  user.id = users.length ? Math.max(...users.map((x) => x.id)) + 1 : 1;

  // set date created and updated
  user.dateCreated = new Date().toISOString();
  user.dateUpdated = new Date().toISOString();

  // add and save user
  users.push(user);
  saveData();

  return user;
}

function saveData() {
  fs.writeFileSync("data/users.json", JSON.stringify(users, null, 4));
}
