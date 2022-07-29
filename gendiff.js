import _ from 'lodash';

const obj1 = {
  "common": {
    "setting1": "Value 1",
    "setting2": 200,
    "setting3": true,
    "setting6": {
      "key": "value",
      "doge": {
        "wow": "too much"
      }
    }
  },
  "group1": {
    "baz": "bas",
    "foo": "bar",
    "nest": {
      "key": "value"
    }
  },
  "group2": {
    "abc": 12345,
    "deep": {
      "id": 45
    }
  },
  "group4": {
    "default": null,
    "foo": 0,
    "isNested": false,
    "nest": {
      "bar": "",
      "isNested": true
    },
    "type": "bas"
  }
}

const obj2 = {
  "common": {
    "follow": false,
    "setting1": "Value 1",
    "setting3": {
      "key": "value"
    },
    "setting4": "blah blah",
    "setting5": {
      "key5": "value5"
    },
    "setting6": {
      "key": "value",
      "ops": "vops",
      "doge": {
        "wow": "so much"
      }
    }
  },

  "group1": {
    "foo": "bar",
    "baz": "bars",
    "nest": "str"
  },

  "group3": {
    "deep": {
      "id": {
        "number": 45
      }
    },
    "fee": 100500
  },

  "group4": {
    "default": "",
    "foo": null,
    "isNested": "none",
    "key": false,
    "nest": {
      "bar": 0
    },
    "someKey": true,
    "type": "bar"
  }
}

const makeStructure = (obj1, obj2) => {
  const keys = Object.keys({...obj1, ...obj2});
  const sortedKeys = keys.sort((a, b) => a.localeCompare(b));
  return sortedKeys.map((key) => {
    if (!(key in obj2)) {
      return { key, value: obj1[key], status: 'removed', };
    }
    if (!(key in obj1)) {
      return { key, value: obj2[key], status: 'added', };
    }
    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      return { key, status: 'node', children: makeStructure(obj1[key], obj2[key]) }
    }
    if (!_.isEqual(obj1[key], obj2[key])) {
      return { key, value: obj2[key], oldValue: obj1[key], status: 'updated', }
    }
    return { key, value: obj1[key], status: 'same', };
  });
};

const structure = makeStructure(obj1, obj2);
//console.log(structure);

const stringify = (data, level) => {
  if (!_.isObject(data)) {
    return `${data}`;
  }
  const result = Object.entries(data).map(([key, value]) => `${'    '.repeat(level + 1)}${key}: ${stringify(value, level + 1)}`);
  return ['{', ...result, `${'    '.repeat(level)}}`].join('\n');
}

const stylish = (arr, level = 1) => {
  const result = arr.map((obj) => {
    if (obj.status === 'removed') {
      return `${'    '.repeat(level - 1)}  - ${obj.key}: ${stringify(obj.value, level)}`;
    }
    if (obj.status === 'added') {
      return `${'    '.repeat(level - 1)}  + ${obj.key}: ${stringify(obj.value, level)}`;
    }
    if (obj.status === 'same') {
      return `${'    '.repeat(level - 1)}    ${obj.key}: ${stringify(obj.value)}`;
    }
    if (obj.status === 'updated') {
      return [`${'    '.repeat(level - 1)}  - ${obj.key}: ${stringify(obj.oldValue, level)}`, `${'    '.repeat(level - 1)}  + ${obj.key}: ${stringify(obj.value, level)}`].join('\n');
    }
    if (obj.status === 'node') {
      return `${'    '.repeat(level)}${obj.key}: ${stylish(obj.children, level + 1)}`;
    }
  })
  return `{\n${result.join('\n')}\n${'    '.repeat(level - 1)}}`;
};

const style = stylish(structure);
//console.log(style);

const stringifyForPlain = (data) => {
  if (_.isObject(data)) {
    return '[complex value]';
  }
  return _.isString(data) ? `'${data}'` : data;
}

const plain = (arr, parent = '') => {
  const result = arr.flatMap((obj) => {

    const path = `${parent}${obj.key}`;

    if (obj.status === 'removed') {
      return `Property '${path}' was removed`;
    }
    if (obj.status === 'added') {
      return `Property '${path}' was added with value: ${stringifyForPlain(obj.value)}`;
    }
    if (obj.status === 'same') {
      return [];
    }
    if (obj.status === 'updated') {
      return `Property '${path}' was updated. From ${stringifyForPlain(obj.oldValue)} to ${stringifyForPlain(obj.value)}`;
    }
    if (obj.status === 'node') {
      return `${plain(obj.children, `${path}.`)}`;
    }
  });
  return result.join('\n');
}

console.log(plain(structure))
