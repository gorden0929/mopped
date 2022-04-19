import { removeUndefined } from "../src";

const json = {
  name: 'jason',
  age: 13,
  marriage: false,
  address: [
    {
      unit: 'A',
      street: undefined,
      city: 'New York',
      state: null,
      country: 'USA',
    },
  ],
};

console.log(removeUndefined(json));