const fs = require("fs");

let tables = require("../../data/tables.json");

export const Tables = {
  getAll: () => tables,
  getByCapacity: (size) => tables.filter((x) => x.capacity >= size),
  find: (x) => tables.find(x),
};
