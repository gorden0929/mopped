# Mopped

Mopped is a Node package for removing `undefined` fields in a JSON object or array.

## Installation

Use the node package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install mopped.

```bash
npm install mopped
```

## Usage

```typescript
import { removeUndefined } from 'mopped';

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

// {
//   name: 'jason',
//   age: 13,
//   marriage: false,
//   address: [ { unit: 'A', city: 'New York', state: null, country: 'USA' } ]
// }
console.log(removeUndefined(json));
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
